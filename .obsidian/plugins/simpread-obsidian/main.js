var obsidian = require( 'obsidian' );

var TurndownService = (function () {
  'use strict';

  function extend (destination) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (source.hasOwnProperty(key)) destination[key] = source[key];
      }
    }
    return destination
  }

  function repeat (character, count) {
    return Array(count + 1).join(character)
  }

  function trimLeadingNewlines (string) {
    return string.replace(/^\n*/, '')
  }

  function trimTrailingNewlines (string) {
    // avoid match-at-end regexp bottleneck, see #370
    var indexEnd = string.length;
    while (indexEnd > 0 && string[indexEnd - 1] === '\n') indexEnd--;
    return string.substring(0, indexEnd)
  }

  var blockElements = [
    'ADDRESS', 'ARTICLE', 'ASIDE', 'AUDIO', 'BLOCKQUOTE', 'BODY', 'CANVAS',
    'CENTER', 'DD', 'DIR', 'DIV', 'DL', 'DT', 'FIELDSET', 'FIGCAPTION', 'FIGURE',
    'FOOTER', 'FORM', 'FRAMESET', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER',
    'HGROUP', 'HR', 'HTML', 'ISINDEX', 'LI', 'MAIN', 'MENU', 'NAV', 'NOFRAMES',
    'NOSCRIPT', 'OL', 'OUTPUT', 'P', 'PRE', 'SECTION', 'TABLE', 'TBODY', 'TD',
    'TFOOT', 'TH', 'THEAD', 'TR', 'UL'
  ];

  function isBlock (node) {
    return is(node, blockElements)
  }

  var voidElements = [
    'AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT',
    'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'
  ];

  function isVoid (node) {
    return is(node, voidElements)
  }

  function hasVoid (node) {
    return has(node, voidElements)
  }

  var meaningfulWhenBlankElements = [
    'A', 'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TH', 'TD', 'IFRAME', 'SCRIPT',
    'AUDIO', 'VIDEO'
  ];

  function isMeaningfulWhenBlank (node) {
    return is(node, meaningfulWhenBlankElements)
  }

  function hasMeaningfulWhenBlank (node) {
    return has(node, meaningfulWhenBlankElements)
  }

  function is (node, tagNames) {
    return tagNames.indexOf(node.nodeName) >= 0
  }

  function has (node, tagNames) {
    return (
      node.getElementsByTagName &&
      tagNames.some(function (tagName) {
        return node.getElementsByTagName(tagName).length
      })
    )
  }

  var rules = {};

  rules.paragraph = {
    filter: 'p',

    replacement: function (content) {
      return '\n\n' + content + '\n\n'
    }
  };

  rules.lineBreak = {
    filter: 'br',

    replacement: function (content, node, options) {
      return options.br + '\n'
    }
  };

  rules.heading = {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

    replacement: function (content, node, options) {
      var hLevel = Number(node.nodeName.charAt(1));

      if (options.headingStyle === 'setext' && hLevel < 3) {
        var underline = repeat((hLevel === 1 ? '=' : '-'), content.length);
        return (
          '\n\n' + content + '\n' + underline + '\n\n'
        )
      } else {
        return '\n\n' + repeat('#', hLevel) + ' ' + content + '\n\n'
      }
    }
  };

  rules.blockquote = {
    filter: 'blockquote',

    replacement: function (content) {
      content = content.replace(/^\n+|\n+$/g, '');
      content = content.replace(/^/gm, '> ');
      return '\n\n' + content + '\n\n'
    }
  };

  rules.list = {
    filter: ['ul', 'ol'],

    replacement: function (content, node) {
      var parent = node.parentNode;
      if (parent.nodeName === 'LI' && parent.lastElementChild === node) {
        return '\n' + content
      } else {
        return '\n\n' + content + '\n\n'
      }
    }
  };

  rules.listItem = {
    filter: 'li',

    replacement: function (content, node, options) {
      content = content
        .replace(/^\n+/, '') // remove leading newlines
        .replace(/\n+$/, '\n') // replace trailing newlines with just a single one
        .replace(/\n/gm, '\n    '); // indent
      var prefix = options.bulletListMarker + '   ';
      var parent = node.parentNode;
      if (parent.nodeName === 'OL') {
        var start = parent.getAttribute('start');
        var index = Array.prototype.indexOf.call(parent.children, node);
        prefix = (start ? Number(start) + index : index + 1) + '.  ';
      }
      return (
        prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : '')
      )
    }
  };

  rules.indentedCodeBlock = {
    filter: function (node, options) {
      return (
        options.codeBlockStyle === 'indented' &&
        node.nodeName === 'PRE' &&
        node.firstChild &&
        node.firstChild.nodeName === 'CODE'
      )
    },

    replacement: function (content, node, options) {
      return (
        '\n\n    ' +
        node.firstChild.textContent.replace(/\n/g, '\n    ') +
        '\n\n'
      )
    }
  };

  rules.fencedCodeBlock = {
    filter: function (node, options) {
      return (
        options.codeBlockStyle === 'fenced' &&
        node.nodeName === 'PRE' &&
        node.firstChild &&
        node.firstChild.nodeName === 'CODE'
      )
    },

    replacement: function (content, node, options) {
      var className = node.firstChild.getAttribute('class') || '';
      var language = (className.match(/language-(\S+)/) || [null, ''])[1];
      var code = node.firstChild.textContent;

      var fenceChar = options.fence.charAt(0);
      var fenceSize = 3;
      var fenceInCodeRegex = new RegExp('^' + fenceChar + '{3,}', 'gm');

      var match;
      while ((match = fenceInCodeRegex.exec(code))) {
        if (match[0].length >= fenceSize) {
          fenceSize = match[0].length + 1;
        }
      }

      var fence = repeat(fenceChar, fenceSize);

      return (
        '\n\n' + fence + language + '\n' +
        code.replace(/\n$/, '') +
        '\n' + fence + '\n\n'
      )
    }
  };

  rules.horizontalRule = {
    filter: 'hr',

    replacement: function (content, node, options) {
      return '\n\n' + options.hr + '\n\n'
    }
  };

  rules.inlineLink = {
    filter: function (node, options) {
      return (
        options.linkStyle === 'inlined' &&
        node.nodeName === 'A' &&
        node.getAttribute('href')
      )
    },

    replacement: function (content, node) {
      var href = node.getAttribute('href');
      var title = cleanAttribute(node.getAttribute('title'));
      if (title) title = ' "' + title + '"';
      return '[' + content + '](' + href + title + ')'
    }
  };

  rules.referenceLink = {
    filter: function (node, options) {
      return (
        options.linkStyle === 'referenced' &&
        node.nodeName === 'A' &&
        node.getAttribute('href')
      )
    },

    replacement: function (content, node, options) {
      var href = node.getAttribute('href');
      var title = cleanAttribute(node.getAttribute('title'));
      if (title) title = ' "' + title + '"';
      var replacement;
      var reference;

      switch (options.linkReferenceStyle) {
        case 'collapsed':
          replacement = '[' + content + '][]';
          reference = '[' + content + ']: ' + href + title;
          break
        case 'shortcut':
          replacement = '[' + content + ']';
          reference = '[' + content + ']: ' + href + title;
          break
        default:
          var id = this.references.length + 1;
          replacement = '[' + content + '][' + id + ']';
          reference = '[' + id + ']: ' + href + title;
      }

      this.references.push(reference);
      return replacement
    },

    references: [],

    append: function (options) {
      var references = '';
      if (this.references.length) {
        references = '\n\n' + this.references.join('\n') + '\n\n';
        this.references = []; // Reset references
      }
      return references
    }
  };

  rules.emphasis = {
    filter: ['em', 'i'],

    replacement: function (content, node, options) {
      if (!content.trim()) return ''
      return options.emDelimiter + content + options.emDelimiter
    }
  };

  rules.strong = {
    filter: ['strong', 'b'],

    replacement: function (content, node, options) {
      if (!content.trim()) return ''
      return options.strongDelimiter + content + options.strongDelimiter
    }
  };

  rules.code = {
    filter: function (node) {
      var hasSiblings = node.previousSibling || node.nextSibling;
      var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

      return node.nodeName === 'CODE' && !isCodeBlock
    },

    replacement: function (content) {
      if (!content) return ''
      content = content.replace(/\r?\n|\r/g, ' ');

      var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? ' ' : '';
      var delimiter = '`';
      var matches = content.match(/`+/gm) || [];
      while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + '`';

      return delimiter + extraSpace + content + extraSpace + delimiter
    }
  };

  rules.image = {
    filter: 'img',

    replacement: function (content, node) {
      var alt = cleanAttribute(node.getAttribute('alt'));
      var src = node.getAttribute('src') || '';
      var title = cleanAttribute(node.getAttribute('title'));
      var titlePart = title ? ' "' + title + '"' : '';
      return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : ''
    }
  };

  function cleanAttribute (attribute) {
    return attribute ? attribute.replace(/(\n+\s*)+/g, '\n') : ''
  }

  /**
   * Manages a collection of rules used to convert HTML to Markdown
   */

  function Rules (options) {
    this.options = options;
    this._keep = [];
    this._remove = [];

    this.blankRule = {
      replacement: options.blankReplacement
    };

    this.keepReplacement = options.keepReplacement;

    this.defaultRule = {
      replacement: options.defaultReplacement
    };

    this.array = [];
    for (var key in options.rules) this.array.push(options.rules[key]);
  }

  Rules.prototype = {
    add: function (key, rule) {
      this.array.unshift(rule);
    },

    keep: function (filter) {
      this._keep.unshift({
        filter: filter,
        replacement: this.keepReplacement
      });
    },

    remove: function (filter) {
      this._remove.unshift({
        filter: filter,
        replacement: function () {
          return ''
        }
      });
    },

    forNode: function (node) {
      if (node.isBlank) return this.blankRule
      var rule;

      if ((rule = findRule(this.array, node, this.options))) return rule
      if ((rule = findRule(this._keep, node, this.options))) return rule
      if ((rule = findRule(this._remove, node, this.options))) return rule

      return this.defaultRule
    },

    forEach: function (fn) {
      for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
    }
  };

  function findRule (rules, node, options) {
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (filterValue(rule, node, options)) return rule
    }
    return void 0
  }

  function filterValue (rule, node, options) {
    var filter = rule.filter;
    if (typeof filter === 'string') {
      if (filter === node.nodeName.toLowerCase()) return true
    } else if (Array.isArray(filter)) {
      if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true
    } else if (typeof filter === 'function') {
      if (filter.call(rule, node, options)) return true
    } else {
      throw new TypeError('`filter` needs to be a string, array, or function')
    }
  }

  /**
   * The collapseWhitespace function is adapted from collapse-whitespace
   * by Luc Thevenard.
   *
   * The MIT License (MIT)
   *
   * Copyright (c) 2014 Luc Thevenard <lucthevenard@gmail.com>
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /**
   * collapseWhitespace(options) removes extraneous whitespace from an the given element.
   *
   * @param {Object} options
   */
  function collapseWhitespace (options) {
    var element = options.element;
    var isBlock = options.isBlock;
    var isVoid = options.isVoid;
    var isPre = options.isPre || function (node) {
      return node.nodeName === 'PRE'
    };

    if (!element.firstChild || isPre(element)) return

    var prevText = null;
    var keepLeadingWs = false;

    var prev = null;
    var node = next(prev, element, isPre);

    while (node !== element) {
      if (node.nodeType === 3 || node.nodeType === 4) { // Node.TEXT_NODE or Node.CDATA_SECTION_NODE
        var text = node.data.replace(/[ \r\n\t]+/g, ' ');

        if ((!prevText || / $/.test(prevText.data)) &&
            !keepLeadingWs && text[0] === ' ') {
          text = text.substr(1);
        }

        // `text` might be empty at this point.
        if (!text) {
          node = remove(node);
          continue
        }

        node.data = text;

        prevText = node;
      } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
        if (isBlock(node) || node.nodeName === 'BR') {
          if (prevText) {
            prevText.data = prevText.data.replace(/ $/, '');
          }

          prevText = null;
          keepLeadingWs = false;
        } else if (isVoid(node) || isPre(node)) {
          // Avoid trimming space around non-block, non-BR void elements and inline PRE.
          prevText = null;
          keepLeadingWs = true;
        } else if (prevText) {
          // Drop protection if set previously.
          keepLeadingWs = false;
        }
      } else {
        node = remove(node);
        continue
      }

      var nextNode = next(prev, node, isPre);
      prev = node;
      node = nextNode;
    }

    if (prevText) {
      prevText.data = prevText.data.replace(/ $/, '');
      if (!prevText.data) {
        remove(prevText);
      }
    }
  }

  /**
   * remove(node) removes the given node from the DOM and returns the
   * next node in the sequence.
   *
   * @param {Node} node
   * @return {Node} node
   */
  function remove (node) {
    var next = node.nextSibling || node.parentNode;

    node.parentNode.removeChild(node);

    return next
  }

  /**
   * next(prev, current, isPre) returns the next node in the sequence, given the
   * current and previous nodes.
   *
   * @param {Node} prev
   * @param {Node} current
   * @param {Function} isPre
   * @return {Node}
   */
  function next (prev, current, isPre) {
    if ((prev && prev.parentNode === current) || isPre(current)) {
      return current.nextSibling || current.parentNode
    }

    return current.firstChild || current.nextSibling || current.parentNode
  }

  /*
   * Set up window for Node.js
   */

  var root = (typeof window !== 'undefined' ? window : {});

  /*
   * Parsing HTML strings
   */

  function canParseHTMLNatively () {
    var Parser = root.DOMParser;
    var canParse = false;

    // Adapted from https://gist.github.com/1129031
    // Firefox/Opera/IE throw errors on unsupported types
    try {
      // WebKit returns null on unsupported types
      if (new Parser().parseFromString('', 'text/html')) {
        canParse = true;
      }
    } catch (e) {}

    return canParse
  }

  function createHTMLParser () {
    var Parser = function () {};

    {
      if (shouldUseActiveX()) {
        Parser.prototype.parseFromString = function (string) {
          var doc = new window.ActiveXObject('htmlfile');
          doc.designMode = 'on'; // disable on-page scripts
          doc.open();
          doc.write(string);
          doc.close();
          return doc
        };
      } else {
        Parser.prototype.parseFromString = function (string) {
          var doc = document.implementation.createHTMLDocument('');
          doc.open();
          doc.write(string);
          doc.close();
          return doc
        };
      }
    }
    return Parser
  }

  function shouldUseActiveX () {
    var useActiveX = false;
    try {
      document.implementation.createHTMLDocument('').open();
    } catch (e) {
      if (window.ActiveXObject) useActiveX = true;
    }
    return useActiveX
  }

  var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();

  function RootNode (input, options) {
    var root;
    if (typeof input === 'string') {
      var doc = htmlParser().parseFromString(
        // DOM parsers arrange elements in the <head> and <body>.
        // Wrapping in a custom element ensures elements are reliably arranged in
        // a single element.
        '<x-turndown id="turndown-root">' + input + '</x-turndown>',
        'text/html'
      );
      root = doc.getElementById('turndown-root');
    } else {
      root = input.cloneNode(true);
    }
    collapseWhitespace({
      element: root,
      isBlock: isBlock,
      isVoid: isVoid,
      isPre: options.preformattedCode ? isPreOrCode : null
    });

    return root
  }

  var _htmlParser;
  function htmlParser () {
    _htmlParser = _htmlParser || new HTMLParser();
    return _htmlParser
  }

  function isPreOrCode (node) {
    return node.nodeName === 'PRE' || node.nodeName === 'CODE'
  }

  function Node (node, options) {
    node.isBlock = isBlock(node);
    node.isCode = node.nodeName === 'CODE' || node.parentNode.isCode;
    node.isBlank = isBlank(node);
    node.flankingWhitespace = flankingWhitespace(node, options);
    return node
  }

  function isBlank (node) {
    return (
      !isVoid(node) &&
      !isMeaningfulWhenBlank(node) &&
      /^\s*$/i.test(node.textContent) &&
      !hasVoid(node) &&
      !hasMeaningfulWhenBlank(node)
    )
  }

  function flankingWhitespace (node, options) {
    if (node.isBlock || (options.preformattedCode && node.isCode)) {
      return { leading: '', trailing: '' }
    }

    var edges = edgeWhitespace(node.textContent);

    // abandon leading ASCII WS if left-flanked by ASCII WS
    if (edges.leadingAscii && isFlankedByWhitespace('left', node, options)) {
      edges.leading = edges.leadingNonAscii;
    }

    // abandon trailing ASCII WS if right-flanked by ASCII WS
    if (edges.trailingAscii && isFlankedByWhitespace('right', node, options)) {
      edges.trailing = edges.trailingNonAscii;
    }

    return { leading: edges.leading, trailing: edges.trailing }
  }

  function edgeWhitespace (string) {
    var m = string.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);
    return {
      leading: m[1], // whole string for whitespace-only strings
      leadingAscii: m[2],
      leadingNonAscii: m[3],
      trailing: m[4], // empty for whitespace-only strings
      trailingNonAscii: m[5],
      trailingAscii: m[6]
    }
  }

  function isFlankedByWhitespace (side, node, options) {
    var sibling;
    var regExp;
    var isFlanked;

    if (side === 'left') {
      sibling = node.previousSibling;
      regExp = / $/;
    } else {
      sibling = node.nextSibling;
      regExp = /^ /;
    }

    if (sibling) {
      if (sibling.nodeType === 3) {
        isFlanked = regExp.test(sibling.nodeValue);
      } else if (options.preformattedCode && sibling.nodeName === 'CODE') {
        isFlanked = false;
      } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
        isFlanked = regExp.test(sibling.textContent);
      }
    }
    return isFlanked
  }

  var reduce = Array.prototype.reduce;
  var escapes = [
    [/\\/g, '\\\\'],
    [/\*/g, '\\*'],
    [/^-/g, '\\-'],
    [/^\+ /g, '\\+ '],
    [/^(=+)/g, '\\$1'],
    [/^(#{1,6}) /g, '\\$1 '],
    [/`/g, '\\`'],
    [/^~~~/g, '\\~~~'],
    [/\[/g, '\\['],
    [/\]/g, '\\]'],
    [/^>/g, '\\>'],
    [/_/g, '\\_'],
    [/^(\d+)\. /g, '$1\\. ']
  ];

  function TurndownService (options) {
    if (!(this instanceof TurndownService)) return new TurndownService(options)

    var defaults = {
      rules: rules,
      headingStyle: 'setext',
      hr: '* * *',
      bulletListMarker: '*',
      codeBlockStyle: 'indented',
      fence: '```',
      emDelimiter: '_',
      strongDelimiter: '**',
      linkStyle: 'inlined',
      linkReferenceStyle: 'full',
      br: '  ',
      preformattedCode: false,
      blankReplacement: function (content, node) {
        return node.isBlock ? '\n\n' : ''
      },
      keepReplacement: function (content, node) {
        return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML
      },
      defaultReplacement: function (content, node) {
        return node.isBlock ? '\n\n' + content + '\n\n' : content
      }
    };
    this.options = extend({}, defaults, options);
    this.rules = new Rules(this.options);
  }

  TurndownService.prototype = {
    /**
     * The entry point for converting a string or DOM node to Markdown
     * @public
     * @param {String|HTMLElement} input The string or DOM node to convert
     * @returns A Markdown representation of the input
     * @type String
     */

    turndown: function (input) {
      if (!canConvert(input)) {
        throw new TypeError(
          input + ' is not a string, or an element/document/fragment node.'
        )
      }

      if (input === '') return ''

      var output = process.call(this, new RootNode(input, this.options));
      return postProcess.call(this, output)
    },

    /**
     * Add one or more plugins
     * @public
     * @param {Function|Array} plugin The plugin or array of plugins to add
     * @returns The Turndown instance for chaining
     * @type Object
     */

    use: function (plugin) {
      if (Array.isArray(plugin)) {
        for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
      } else if (typeof plugin === 'function') {
        plugin(this);
      } else {
        throw new TypeError('plugin must be a Function or an Array of Functions')
      }
      return this
    },

    /**
     * Adds a rule
     * @public
     * @param {String} key The unique key of the rule
     * @param {Object} rule The rule
     * @returns The Turndown instance for chaining
     * @type Object
     */

    addRule: function (key, rule) {
      this.rules.add(key, rule);
      return this
    },

    /**
     * Keep a node (as HTML) that matches the filter
     * @public
     * @param {String|Array|Function} filter The unique key of the rule
     * @returns The Turndown instance for chaining
     * @type Object
     */

    keep: function (filter) {
      this.rules.keep(filter);
      return this
    },

    /**
     * Remove a node that matches the filter
     * @public
     * @param {String|Array|Function} filter The unique key of the rule
     * @returns The Turndown instance for chaining
     * @type Object
     */

    remove: function (filter) {
      this.rules.remove(filter);
      return this
    },

    /**
     * Escapes Markdown syntax
     * @public
     * @param {String} string The string to escape
     * @returns A string with Markdown syntax escaped
     * @type String
     */

    escape: function (string) {
      return escapes.reduce(function (accumulator, escape) {
        return accumulator.replace(escape[0], escape[1])
      }, string)
    }
  };

  /**
   * Reduces a DOM node down to its Markdown string equivalent
   * @private
   * @param {HTMLElement} parentNode The node to convert
   * @returns A Markdown representation of the node
   * @type String
   */

  function process (parentNode) {
    var self = this;
    return reduce.call(parentNode.childNodes, function (output, node) {
      node = new Node(node, self.options);

      var replacement = '';
      if (node.nodeType === 3) {
        replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
      } else if (node.nodeType === 1) {
        replacement = replacementForNode.call(self, node);
      }

      return join(output, replacement)
    }, '')
  }

  /**
   * Appends strings as each rule requires and trims the output
   * @private
   * @param {String} output The conversion output
   * @returns A trimmed version of the ouput
   * @type String
   */

  function postProcess (output) {
    var self = this;
    this.rules.forEach(function (rule) {
      if (typeof rule.append === 'function') {
        output = join(output, rule.append(self.options));
      }
    });

    return output.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '')
  }

  /**
   * Converts an element node to its Markdown equivalent
   * @private
   * @param {HTMLElement} node The node to convert
   * @returns A Markdown representation of the node
   * @type String
   */

  function replacementForNode (node) {
    var rule = this.rules.forNode(node);
    var content = process.call(this, node);
    var whitespace = node.flankingWhitespace;
    if (whitespace.leading || whitespace.trailing) content = content.trim();
    return (
      whitespace.leading +
      rule.replacement(content, node, this.options) +
      whitespace.trailing
    )
  }

  /**
   * Joins replacement to the current output with appropriate number of new lines
   * @private
   * @param {String} output The current conversion output
   * @param {String} replacement The string to append to the output
   * @returns Joined output
   * @type String
   */

  function join (output, replacement) {
    var s1 = trimTrailingNewlines(output);
    var s2 = trimLeadingNewlines(replacement);
    var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
    var separator = '\n\n'.substring(0, nls);

    return s1 + separator + s2
  }

  /**
   * Determines whether an input can be converted
   * @private
   * @param {String|HTMLElement} input Describe this parameter
   * @returns Describe what it returns
   * @type String|Object|Array|Boolean|Number
   */

  function canConvert (input) {
    return (
      input != null && (
        typeof input === 'string' ||
        (input.nodeType && (
          input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11
        ))
      )
    )
  }

  return TurndownService;

}());

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var    _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.lang.dayNames.long[D],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.lang.monthNames.long[m],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    default:      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.lang = {
    dayNames: {
        short: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        long : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        zh   : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
    },
    monthNames: {
        short: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        long : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        zh   : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
    }
};

dateFormat.i18n = {
    dayNames  : dateFormat.lang.dayNames.short,
    monthNames: dateFormat.lang.monthNames.short,
};

dateFormat.setLocal = function( local ) {
    dateFormat.i18n = {
        dayNames  : dateFormat.lang.dayNames[ local ],
        monthNames: dateFormat.lang.monthNames[ local ],
    };
}

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    config    : 'simpread_config.json',
    count     : '10',
    override  : true,
    folder    : 'SimpRead',
    path      : '',
    paragraph : '-',
    annote    : true,
    frequency : '-1',
    tag_prefix: '#',
    tag_suffix: ' ',
    title     : '{{title}}',
    template  : `# {{title}}

## Metadata
- Full Title: {{title}}
- Date: {{create|yyyy/dd/mm HH:MM:ss|zh}}
- Summry: {{desc}}
- Category: {{tags}}
- URL: {{url}}
- Internal link: {{int_uri}}
- Reference: {{refs}}

## Highlights
`,
    annotation: `{{an_html}}

{{> |an_note}}

> Create: {{an_create|yyyy/dd/mm HH:MM:ss|zh}}

> Category: {{an_tags}}

> Internal link: {{an_int_uri}}
`
}

class SimpReadPlugin extends obsidian.Plugin {

    constructor() {
        super( ...arguments );
        this.scheduleInterval = null;
    }

    onload() {
        return __awaiter( this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab( new SimpReadSettingTab( this.app, this ));
            yield this.schedule();
        });
    }

    onunload() {
        // we're not doing anything here for now...
        return;
    }

    loadSettings() {
        return __awaiter( this, void 0, void 0, function* () {
            this.settings = Object.assign( {}, DEFAULT_SETTINGS, yield this.loadData() );
        });
    }

    saveSettings() {
        return __awaiter( this, void 0, void 0, function* () {
            yield this.saveData( this.settings );
        });
    }

    sync() {
        if ( this.settings.path.trim() == '/' ) {
            this.notice( 'SimpRead config path not empty', true, 4, true );
            return;
        }
        const path = this.app.vault.adapter.path.resolve( this.settings.path, DEFAULT_SETTINGS.config );
        this.app.vault.adapter.fs.readFile( path, 'utf8', ( err, result ) => {
            if ( !err ) {
                const config  = JSON.parse( result ),
                      unrdist = config.unrdist;
                if ( unrdist && unrdist.length > 0 ) this.write( unrdist );
                else this.notice( 'Not found unread list', true, 4, true );
            } else this.notice( 'Not found simpead_config.json', true, 4, true );
        });
    }

    write( unrdist ) {
        const path   = this.app.vault.adapter.basePath + '/' + this.settings.folder,
              exists = this.app.vault.adapter.fs.existsSync( path );
        if ( !exists ) {
            this.app.vault.adapter.fs.mkdirSync( path );
        }
        const files  = /{{id}}|{{timestamp}}/.test( this.settings.title ) ? this.app.vault.adapter.fs.readdirSync( path , { encoding:'utf8' }) : [],
              safe   = title => {
                  return title.replace( /:/ig, '：' )
                              .replace( /\?/ig, '？' )
                              .replace( /\/|\*|\||<|>|\.|,|=/ig, '_' )
                              .replace( /\\/ig, '-' )
                              .replace( /%/ig, '％' )
                              .replace( /;/ig, '；' )
                              .replace( /"/ig, '' );
              };
        this.unrdist = [ ...unrdist ];
        if ( this.settings.count == 0 ) {
            unrdist = unrdist.reverse();
        } else {
            unrdist = unrdist.splice( 0, parseInt( this.settings.count ));
            unrdist = unrdist.reverse();
        }
        for ( let i = 0; i < unrdist.length; i++ ) {
            if ( i >= unrdist.length - 1 ) {
                this.notify && this.notice( 'Write all files complete.', true, 4, true);
                this.notify = false;
            }
            const unread = unrdist[i];
            if ( unread ) {
                if ( this.settings.annote && (( unread.annotations && unread.annotations.length == 0 ) || !unread.annotations )) {
                    continue;
                }
                const file = this.app.vault.adapter.path.resolve( path, safe( unread.title ) + '.md' );
                const existfiles = () => {
                    const idx       = unread.idx,
                          timestamp = unread.create.replace( /年|月|日|:| /ig, '' );
                    let   existfile = [];
                    /{{id}}/.test( this.settings.title ) && ( existfile = files.filter( item => {
                        const arr = item.match( /^\d+/ );
                        if ( arr && arr.length > 0 ) {
                            return arr[0] == idx;
                        }
                    }));
                    /{{timestamp}}/.test( this.settings.title ) && ( existfile = files.filter( item => {
                        const arr = item.match( /^\d+/ );
                        if ( arr && arr.length > 0 ) {
                            return arr[0] == timestamp;
                        }
                    }));
                    return existfile;
                },
                somefiles = existfiles();
                if ( !this.settings.override ) {
                    if ( files.length > 0 && somefiles.length > 0 ) {
                        continue;
                    } else if ( this.app.vault.adapter.fs.existsSync( file )) {
                        continue;
                    }
                }
                if ( !unread.annotations ) unread.annotations = [];
                try {
                    const tmpl      = this.template( unread, unrdist ),
                          title     = this.settings.title
                                        .replace( /{{id}}/ig,        unread.idx )
                                        .replace( /{{note}}/ig,      safe( unread.note ? unread.note.replace( /\n/ig, '' ) : unread.title ) )
                                        .replace( /{{title}}/ig,     safe( unread.title ) )
                                        .replace( /{{timestamp}}/ig, unread.create.replace( /年|月|日|:| /ig, '' ));
                    // when override remove exist file
                    somefiles.forEach( remove => this.app.vault.adapter.fs.unlinkSync( path + '/' + remove ));
                    this.app.vault.adapter.fs.writeFileSync( path + '/' + title + '.md', tmpl );
                } catch ( error ) {
                    console.error( 'current unread write error: ', error, unread )
                }
            }
        }
    }

    template( unread, unrdist ) {
        const turndownService = new TurndownService(),
        findUnReadbyID = ( idx, arr ) => {
            for ( let i = 0; i < arr.length; i++ ) {
                if ( arr[i].idx == idx ) {
                    return arr[i];
                }
            }
        },
        findAnnotebyID = ( id, arr ) => {
            for ( let i = 0; i < arr.length; i++ ) {
                const target = arr[i],
                      index  = target.annotations && target.annotations.findIndex( item => item.id == id );
                if ( index > -1 ) {
                    return { unread: target, annote: target.annotations[ index ]};
                }
            }
            return { unread: {}, annote: {} };
        },
        parseTags = tags => {
            let html = '';
            this.settings.tag_suffix == '\\n' && ( this.settings.tag_suffix = '\n' );
            tags && tags.forEach( tag => html += this.settings.tag_prefix + `${ tag.replace( / /ig, '_' ) }` + this.settings.tag_suffix );
            return html.replace( new RegExp( this.settings.tag_suffix + '$' ), '' );
        },
        parseDate = ( template, day ) => {
            let date = '';
            const match = template.match( /{{\w+\|[ \S]+}}/ig );
            if ( match && match.length > 0 ) {
                const arr = match[0].replace( /{|}/ig, '' ).split( '|' );
                if ( arr && arr.length > 0 ) {
                    const [ id, format, lang ] = arr;
                    dateFormat.setLocal( lang || 'short' );
                    if ( !day ) {
                        day = unread[ id ].replace( /年|月/ig, '-' ).replace( /日/ig, '' )
                    } else {
                        day = new Date( day );
                    }
                    date = dateFormat( day, format );
                }
            }
            return date;
        },
        parseTimetamp = ( day ) => {
            const date = dateFormat( day, 'yyyyddmmHHMMss' );
            return date;
        },
        parseRefs = refs => {
            let tmpl  = "";
            refs && refs.split( '\n' ).forEach( url => {
                tmpl += `[${url}](<${url}>) `;
            });
            return tmpl.trim();
        },
        parseUrl = ( type, id, text ) => {
            const title = unread.title.replace( /\/|:|\*|\?|<|>|\|/ig, "-" );
            if ( type == 'org' ) {
                return unread.url + "#js_content:~:text=" + encodeURI( text );
            } else if ( type == 'int' || type == 'url' ) {
                const suffix = id ? '#id=' + id : '',
                      url    = `http://localhost:7026/reading/${ unread.idx }?title=${ title }` + suffix
                return type == 'int' ? `[${ url }](<${ url }>)` : url;
            }
        },
        parseInline = ( type, value ) => {
            const reg = new RegExp( `{{\[ \\S\]\+\\|${type}}}` );
            if ( reg.test( this.settings.annotation )) {
                let str      = "";
                const prefix = this.settings.annotation.match(reg)[0].replace( /{|{|}|}|}|\|/ig, '' ).replace( type, '' );
                value && value.split( '\n' ).forEach( item => str += prefix + ' ' + item + '\n' );
                return str.trim();
            } else return value;
        },
        parseBakinks = backlinks => {
            let tmpl = "";
            backlinks && backlinks.forEach( backlink => {
                if ( backlink.type == 'unread' ) {
                    const unread = findUnReadbyID( backlink.id, this.unrdist );
                    unread && ( tmpl += `[[${ unread.title }]] ` );
                } else if ( backlink.type == 'annote' ) {
                    const result = findAnnotebyID( backlink.id, this.unrdist );
                    if ( result ) {
                        const unread       = result.unread,
                              annote       = result.annote;
                        tmpl += `[[${ unread.title }]] `;
                    }
                }
            });
            return tmpl.trim();
        };
        //console.log( unread )
        let tmpl = this.settings.template
                    .replace( /{{\w+\|[ \S]+}}/ig, parseDate( this.settings.template ))
                    .replace( /{{timestamp}}/ig,   unread.create.replace( /年|月|日|:| /ig, '' ))
                    .replace( /{{url}}/ig,         unread.url )
                    .replace( /{{title}}/ig,       unread.title )
                    .replace( /{{tags}}/ig,        parseTags( unread.tags ))
                    .replace( /{{refs}}/ig,        parseRefs( unread.refs ))
                    .replace( /{{int_uri}}/ig,     parseUrl( 'int' ))
                    .replace( /{{int_url}}/ig,     parseUrl( 'url' ))
                    .replace( /{{backlinks}}/ig,   parseBakinks( unread.backlinks ))
                    .replace( /{{note}}/ig,        unread.note || '' )
                    .replace( /{{desc}}/ig,        unread.desc || '' );
        let annotations = '';
        unread.annotations.forEach( annote => {
            let markdown = '';
            if ( annote.type == 'img' ) {
                markdown    = `![](${ annote.text })`;
            } else if ( annote.type == 'code' ) {
                markdown    = '\`\`\`\n' + annote.text + '\n\`\`\`';
            } else markdown = turndownService.turndown( annote.html );
            markdown && ( markdown = markdown.trim() );
            if ( markdown != '' ) {
                if ( this.settings.paragraph == '-' ) {
                    if ( annote.type == 'code' ) annotations += '- \`\`\`\n' + annote.text.trim() + '\`\`\`\n';
                    else annotations += `- ${ markdown.replace( /\n/ig, '' ) }\n`;
                } else {
                    markdown = this.settings.annotation
                            .replace( /{{\w+\|[ \S]+}}/ig,     parseDate( this.settings.annotation, annote.id ))
                            .replace( /{{an_html}}/ig,         markdown )
                            .replace( /{{an_html_noline}}/ig,  markdown.replace( /\n/ig, '' ))
                            .replace( /{{an_tags}}/ig,         parseTags( annote.tags ))
                            .replace( /{{an_note}}/ig,         annote.note || '' )
                            .replace( /{{an_refs}}/ig,         parseRefs( annote.refs ))
                            .replace( /{{an_int_uri}}/ig,      parseUrl( 'int', annote.id ))
                            .replace( /{{an_int_url}}/ig,      parseUrl( 'url', annote.id ))
                            .replace( /{{[ \S]+\|an_html}}/ig, parseInline( 'an_html', markdown ))
                            .replace( /{{[ \S]+\|an_note}}/ig, parseInline( 'an_note', annote.note ))
                            .replace( /{{an_timestamp}}/ig,    parseTimetamp( annote.id ))
                            .replace( /{{an_backlinks}}/ig,    parseBakinks( annote.backlinks ));
                    if ( this.settings.paragraph == '>' ) {
                        markdown.split( '\n' ).forEach( item => {
                            annotations += `> ${ item }\n`;
                        });
                        annotations  = `${ annotations }\n`;
                    } else {
                        annotations += `${ markdown }\n`;
                    }
                }
            }
        });
        if ( /{{annotations}}/.test( this.settings.template )) {
            tmpl     = tmpl.replace( /{{annotations}}/ig, annotations );
        } else tmpl += `${ annotations }\n`;
        return tmpl;
    }

    schedule() {
        window.clearInterval( this.interval );
        this.interval = null;
        this.updater  = 0;
        if ( this.settings.frequency == -1 ) {
            return;
        }
        const minutes = parseInt( this.settings.frequency ),
              loop    = minutes * 60 * 1000;
        if ( this.settings.frequency == 0 ) {
            const path = this.app.vault.adapter.path.resolve( this.settings.path, DEFAULT_SETTINGS.config );
            this.app.vault.adapter.fs.watch( path, ( event, filename ) => {
                if ( this.settings.frequency != 0 ) {
                    return;
                }
                const now = +new Date();
                if ( now - this.updater > 2000 ) {
                    setTimeout( () => this.sync(), 2000 );
                    this.updater = now;
                }
            });
        } else {
            this.interval = window.setInterval(() => {
                this.sync();
            }, loop );
        }
    }

    notice( msg, show = false, timeout = 0, forcing = false ) {
        show && new obsidian.Notice( msg );
        //this.statusBar.displayMessage(msg.toLowerCase(), timeout, forcing);
    }

    getObsidianClientID() {
        let obsidianClientId = window.localStorage.getItem( 'rw-ObsidianClientId' );
        if ( obsidianClientId ) {
            return obsidianClientId;
        }
        else {
            obsidianClientId = Math.random().toString( 36 ).substring( 2, 15 );
            window.localStorage.setItem( 'rw-ObsidianClientId', obsidianClientId );
            return obsidianClientId;
        }
    }
}

class SimpReadSettingTab extends obsidian.PluginSettingTab {

    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    titleDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'By default is {{title}}, support placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{url}} {{title}} {{timestamp}}' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1388527';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    templateDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'Unread Markdown Template date support:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'Date formats are supported {{create|yyyy/dd/mm HH:MM:ss|zh}}' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'Unread Markdown Template placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{url}} {{title}} {{desc}} {{note}} {{tags}} ...' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1389535';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    annotationDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'Annotation Markdown Template placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{an_html}} {{an_note}} {{an_int_uri}} {{an_tags}} {{> |an_note}} ...' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1393730';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    display() {
        let { containerEl } = this;

        containerEl.empty();
        containerEl.createEl( 'h1', { text: 'SimpRead Unreader Sync' });
        containerEl.createEl( 'p', { text: 'Created by ' }).createEl( 'a', { text: 'SimpRead', href: 'https://simpread.pro' });
        containerEl.getElementsByTagName( 'p' )[0].appendText(' 📚' );

        containerEl.createEl( 'h3', { text: 'Sync Settings' });

        new obsidian.Setting( containerEl )
            .setName( 'Sync your SimpRead unread data with Obsidian' )
            .setDesc( 'On first sync, the SimpRead plugin will create a new folder containing all your highlights' )
            .setClass( 'rw-setting-sync' )
            .addButton( button => {
                button.setCta().setTooltip( 'Once the sync begins, default synchronise up to 10 unread' )
                    .setButtonText( 'Manual Sync' )
                    .onClick(() => {
                        this.plugin.notify = true;
                        this.plugin.sync();
                    });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Maximum number of Synchronize' )
            .setDesc( 'By default, Maximum number is 10, All will be saved when you set 0' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: 10' )
                .setValue( this.plugin.settings.count + '' )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.count = obsidian.normalizePath( value || DEFAULT_SETTINGS.count );
                    yield this.plugin.saveSettings();
                }))
            );

            new obsidian.Setting( containerEl )
            .setName( 'Configure resync frequency' )
            .addDropdown( dropdown => {
                dropdown.addOption( '-1', 'Do not monitor files' );
                dropdown.addOption( '0', 'Monitor file changes' );
                dropdown.addOption( '5', 'Every 5 mintues' );
                dropdown.addOption( '10', 'Every 10 mintues' );
                dropdown.addOption( '30', 'Every 30 mintues' );
                dropdown.setValue( this.plugin.settings.frequency + '' );
                dropdown.onChange( value => {
                    this.plugin.settings.frequency = value;
                    this.plugin.saveSettings();
                    this.plugin.schedule();
                });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Do you want to overwrite existing files?' )
            .addToggle( toggle => {
                toggle.setValue( this.plugin.settings.override );
                toggle.onChange( value => {
                    this.plugin.settings.override = value;
                    this.plugin.saveSettings();
                });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Customize base folder' )
            .setDesc( 'By default, the plugin will save all your highlights into a folder named SimpRead' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: SimpRead' )
                .setValue( this.plugin.settings.folder )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.folder = obsidian.normalizePath( value || DEFAULT_SETTINGS.folder );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'SimpRead config path' )
            .setDesc( 'Same as SimpRead Sync path' )
            .addText( text => text
                .setPlaceholder( 'Required, do\'nt empty' )
                .setValue( this.plugin.settings.path )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.path = obsidian.normalizePath( value );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Hightlights Format' )
            .setDesc( 'Includ: Bullet · Block · Custom' )
            .addDropdown( dropdown => {
                dropdown.addOption( '-', 'Bullet' );
                dropdown.addOption( '>', 'Block' );
                dropdown.addOption( '!', 'Custom' );
                dropdown.setValue( this.plugin.settings.paragraph );
                dropdown.onChange( value => {
                    this.plugin.settings.paragraph = value;
                    this.plugin.saveSettings();
                });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Write only exist annotations with unread' )
            .setDesc( 'When unread not exist annotations, not saved to Obsidian.' )
            .addToggle( toggle => {
                toggle.setValue( this.plugin.settings.annote );
                toggle.onChange( value => {
                    this.plugin.settings.annote = value;
                    this.plugin.saveSettings();
                });
            });

        containerEl.createEl( 'h3', { text: 'Markdown Template Settings' });

        new obsidian.Setting( containerEl )
            .setName( 'Customize Title' )
            .setDesc( this.titleDesc() )
            .addText( text => text
                .setPlaceholder( 'Defaults to: {{title}}' )
                .setValue( this.plugin.settings.title )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.title = obsidian.normalizePath( value || DEFAULT_SETTINGS.title );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Unread Markdown Template' )
            .addTextArea( text => {
                text
                    .setPlaceholder( 'When empty, use the default template' )
                    .setValue( this.plugin.settings.template )
                    .onChange( value => {
                        if ( value.trim() == '' ) value = DEFAULT_SETTINGS.template;
                        this.plugin.settings.template = value;
                        this.plugin.saveSettings();
                    });
                text.inputEl.rows = 10;
                text.inputEl.cols = 25;
            })
            .setDesc( this.templateDesc() );

        new obsidian.Setting( containerEl )
            .setName( 'Annotation Markdown Template' )
            .addTextArea( text => {
                text
                    .setPlaceholder( 'When empty, use the default annotation template' )
                    .setValue( this.plugin.settings.annotation )
                    .onChange( value => {
                        if ( value.trim() == '' ) value = DEFAULT_SETTINGS.annotation;
                        this.plugin.settings.annotation = value;
                        this.plugin.saveSettings();
                    });
                text.inputEl.rows = 10;
                text.inputEl.cols = 25;
            })
            .setDesc( this.annotationDesc() );

        new obsidian.Setting( containerEl )
            .setName( 'Customize Tag Prefix' )
            .setDesc( 'For example: when value is #, show as #tag1 #tag2' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: #' )
                .setValue( this.plugin.settings.tag_prefix )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.tag_prefix = value;
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Customize Tag Suffix' )
            .setDesc( 'For example: when value is , show as #tag1, #tag2' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: space' )
                .setValue( this.plugin.settings.tag_suffix )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.tag_suffix = value;
                    yield this.plugin.saveSettings();
                }))
            );

        const help = containerEl.createEl( 'p' );
        help.innerHTML = `Question? Please see our <a href='https://github.com/Kenshin/simpread/discussions/2889'>Documentation</a> 🙂`;
    }
}

module.exports = SimpReadPlugin;
