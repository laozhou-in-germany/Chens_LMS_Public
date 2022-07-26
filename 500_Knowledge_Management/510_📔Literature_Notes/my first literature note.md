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
Tags:: 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# my first literature note
==⚠This note is a demo file. You can safely delete it if you want.⚠==

Hi, this is my first literature note.  

> Knowledge management (KM) is the collection of methods relating to creating, sharing, using and managing the knowledge and information of an organization. It refers to a multidisciplinary approach to achieve organisational objectives by making the best use of knowledge - [Knowledge management - Wikipedia](https://en.wikipedia.org/wiki/Knowledge_management)

