---
author:  
excerpt:  
fileClass: literature-note  
score: xx 
category-literature-note: article  
reviewed: x  
cover:  
date: 2022-08-14  
last-review: 2022-08-14  
---
Tags:: 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# New Literature Note

