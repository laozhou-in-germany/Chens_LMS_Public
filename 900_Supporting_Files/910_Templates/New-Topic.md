---
alias: []
excerpt:  
fileClass: topic  
score: x  
category-topic:   
reviewed: x  
cover: 
date: <% tp.date.now("YYYY-MM-DD") %>  
last-review: <% tp.date.now("YYYY-MM-DD") %>  
---
Value-Goal::  
Related-Tag:: #dummytopic

**Unprocessed Notes**
~~~dataviewjs
let currentPage = this.current()
let tagRel = currentPage["Related-Tag"]
let notes = dv.pages(tagRel 
			+ ' and !"' + this.current().file.path + '"' )
			.where(p => !p.file.inlinks.includes(currentPage.file.link) & p.file.etags.includes(tagRel));
if (tagRel != "#dummytopic") {
	dv.list(notes.file.link);
}
~~~

# <% tp.file.title %>

