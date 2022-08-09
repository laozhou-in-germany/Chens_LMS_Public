---
excerpt:  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
date: 2022-07-13  
last-review: 2022-07-13  
---
Tags::  
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# my first evergreen note
==⚠This note is a demo file. You can safely delete it if you want.⚠==

Hi, this is my first evergreen note.  
**Creating a new note in Obsidian is really easy.**