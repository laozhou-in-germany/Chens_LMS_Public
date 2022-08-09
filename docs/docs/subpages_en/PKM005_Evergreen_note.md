# Evergreen note



## Note file structure

An evergreen note consists of 4 parts:

- Yalm front matter
- "Context-aware resurfacing"  section 
- Note title
- Body text

### Yalm front matter 

The evergreen note has the following standard property in the yalm front matter. 

~~~yaml
---
excerpt: German cities are beautiful  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
date: 2022-01-14  
last-review: 2022-01-14   
---
~~~

`excerpt`: Excerpt of the note, optional

`fileClass`: Note type, always `evergreen-note` 

`score`: The score of the note, possible value: x,...,xxxxx, required for the feature **Spaced repetition**

`category-evergreen-note`: Category of the evergreen note, optional

`reviewed`: Review times, possible value: x,...,xxxxx, required for the feature **Spaced repetition**

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

The body text of the evergreen note. 

Example:

```markdown
I visited a lot of the cities in German. They are beautiful.
```







