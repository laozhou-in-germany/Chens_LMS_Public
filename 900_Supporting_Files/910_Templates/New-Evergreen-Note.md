---
author:  
excerpt:  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
cover: 
date: <% tp.date.now("YYYY-MM-DD") %>  
last-review: <% tp.date.now("YYYY-MM-DD") %>  
---
Tags:: 
~~~dataviewjs
let tags = this.current().file.etags
	.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#topic" && t!="#meeting-minutes" && t!="#day" );
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# <% tp.file.title %>