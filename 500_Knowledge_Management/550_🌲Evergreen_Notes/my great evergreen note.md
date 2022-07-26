---
author:  
excerpt:  
fileClass: evergreen-note
score: xxxx  
category-evergreen-note:  
reviewed: xxxxx  
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

# my great evergreen note
==⚠This note is a demo file. You can safely delete it if you want.⚠==

