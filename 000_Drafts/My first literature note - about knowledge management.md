---
author:  
excerpt:  
fileClass: literature-note  
score: xx 
category-literature-note: article  
reviewed: x  
cover:  
date: 2022-07-13  
last-review: 2022-07-13  
---
Tags:: #note-creation 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# My first literature note - about knowledge management
Hi, this is my first literature note.  It can be quickly created using the method in [[../900_Supporting_Files/991_Readme/QS_Add_the_first_note]].

> Knowledge management (KM) is the collection of methods relating to creating, sharing, using and managing the knowledge and information of an organization. It refers to a multidisciplinary approach to achieve organisational objectives by making the best use of knowledge - [Knowledge management - Wikipedia](https://en.wikipedia.org/wiki/Knowledge_management)
