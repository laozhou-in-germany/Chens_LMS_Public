# Literature note

## Note file structure

A literature note consists of 4 parts:

- Yalm front matter
- "Context-aware resurfacing"  section 
- Note title
- Body text

### Yalm front matter 

The literature note has the following standard property in the yalm front matter. 

~~~yaml
---
author: Wikipedia 
excerpt: Berlin is the captical of Germany
fileClass: literature-note  
score: xxxx 
category-literature-note: article  
reviewed: xx  
cover: https://dummy.org/dummy.jpg 
date: 2022-01-13  
last-review: 2022-01-13  
---
~~~

`author`: Author of the literature, optional  

`excerpt`: Excerpt of the note, optional

`fileClass`: Note type, always `literature-note` 

`score`: The score of the note, possible value: x,...,xxxxx, required for the feature **Spaced repetition**

`category-literature-note`: Category of the literature note, optional

`reviewed`: Review times, possible value: x,...,xxxxx, required for the feature **Spaced repetition**

`cover`: HTTP of an image as a cover, optional, can be used to display the cover of the literature using dataview.

`date`: Creation date of the note, automatically created 

`last-review`: Date of the last review, required for the feature **Spaced repetition**



### "Context-aware resurfacing"  section 
After the yalm front matter, there is a section for "Context-aware resurfacing". 
```javascript
Tags:: #berlin
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~
```
It has two parts.

Part 1: `Tags::`, for defining the context with tag 

You can also tag in other note lines.  This line is only a suggestion to keep notes having a similar structure

Part 2: dataview code block, for resurfacing related notes.

All the notes with the same tags as the current note will be shown here, except the note itself. 

### Note title

The note title and the note file name are kept in sync with the plugin [Filename heading sync](https://github.com/dvcrn/obsidian-filename-heading-sync).

### Body text

The body text of the literature note. 

Example:

```markdown
~~~ad-summary
Berlin is the capital of Germany, has a long history and is a city of culture. 
~~~

**Berlin is the capital and largest city of Germany by both area and population**. Its 3.7 million inhabitants make it the European Union's most populous city, according to population within city limits. One of Germany's sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg's capital. Berlin's urban area, which has a population of around 4.5 million, ==**is the second most populous urban area in Germany after the Ruhr.**== The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany's third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions. There was an unsuccessful attempt to unify both states in 1996, and despite remaining separate, the two states cooperate on many matters to this day.
💡 [[Ich bin ein Berliner - Kennedy]]
💡 [[German cities are beautiful]]
```

The text is displayed in the reading mode like the picture below.

![image-20220803205234600](images/image-20220803205234600.png)

#### Progressive summarization

It's suggested to use progressive summarization by Tiago Forte to read the literature note. It's a technology to consume the information step by step, and at the meanwhile compressing it by need. This technology contains the following steps.

1.  Note
2.  Bold passage using "** **"
3.  Highlight passage using "== =="
4.  Mini-summary using admonition "~~~ad-summary"
5.  Remix

In the sample text above there are two bold passages, one highlight passage, and a mini summary.  For proper display of the mini-summary, the plugin  [Admonition](https://github.com/valentine195/obsidian-admonition) is required. 

#### Extraction of atomic notes and evergreen notes

You are expected to extract information from the literature note during the progressive summarization.:  atomic notes and evergreen notes, which resonate with you.  In the sample text, an atomic note and an evergreen note are extracted. (The last two lines.) 

The symbol  `💡` before the note tile is used to mark the extracted note. While reading the extracted note, you can easily find out, from which literature note it's extracted.  The literature note has a symbol  `💡` before the title in the linked mention section. E.g. The atomic note "Ich bin ein Berliner - Kennedy" is extracted from "Berlin (Wikipedia)", but not from the topic note "Berlin".

![image-20220803214007822](images/image-20220803214007822.png)




