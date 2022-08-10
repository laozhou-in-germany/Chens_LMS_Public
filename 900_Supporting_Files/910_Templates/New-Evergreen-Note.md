---
excerpt:  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
date: <% tp.date.now("YYYY-MM-DD") %>  
last-review: <% tp.date.now("YYYY-MM-DD") %>  
---
Tags:: 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# <% tp.file.title %>

<% tp.file.cursor(1) %>