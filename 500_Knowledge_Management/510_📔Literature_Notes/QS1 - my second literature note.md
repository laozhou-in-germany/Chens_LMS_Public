---
author:  
excerpt:  
fileClass: literature-note  
score: xxx 
category-literature-note: article  
reviewed: x  
cover:  
date: 2022-07-13  
last-review: 2022-07-13  
---
Tags::  #note-creation 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# QS1 - my second literature note

>Content management (CM) is a set of processes and technologies that supports the collection, managing, and publishing of information in any form or medium. When stored and accessed via computers, this information may be more specifically referred to as digital content, or simply as content.
>
Digital content may take the form of text (such as electronic documents), images, multimedia files (such as audio or video files), or any other file type that follows a content lifecycle requiring management.
>
 The process is complex enough to manage that several large and small commercial software vendors such as Interwoven and Microsoft offer content management software to control and automate significant aspects of the content lifecycle. - [Content management - Wikipedia](https://en.wikipedia.org/wiki/Content_management)