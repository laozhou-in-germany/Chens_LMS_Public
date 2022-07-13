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

# QS1 - my first literature note
Hi, this is my first literature note.  It can be quickly created using the method in [[QS1_Add_your_first_notes]].

> Knowledge management (KM) is the collection of methods relating to creating, sharing, using and managing the knowledge and information of an organization. It refers to a multidisciplinary approach to achieve organisational objectives by making the best use of knowledge - [Knowledge management - Wikipedia](https://en.wikipedia.org/wiki/Knowledge_management)
