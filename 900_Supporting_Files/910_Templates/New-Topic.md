---
alias: []
excerpt:  
fileClass: topic  
score: x  
category-topic:   
status-topic: seeded  
cover: 
date: <% tp.date.now("YYYY-MM-DD") %>  
to-research: n
notes-to-consolidate: 10 
---
Last-revision:: [[<% tp.date.now("YYYY-MM-DD") %>]]   

Pillar:: [[💦Others]] 
Value-Goal::  

Related-Tag:: #dummytopic
Excluding-Tag1:: #dummytopic 
Excluding-Tag2:: #dummytopic 
Excluding-Tag3:: #dummytopic 
Excluding-Tag4:: #dummytopic 
Excluding-Tag5:: #dummytopic 

**Unprocessed Notes**
~~~dataviewjs
let currentPage = this.current()

let tagRel = currentPage["Related-Tag"]
let tagExcl1 = currentPage["Excluding-Tag1"]
let tagExcl2 = currentPage["Excluding-Tag2"]
let tagExcl3 = currentPage["Excluding-Tag3"]
let tagExcl4 = currentPage["Excluding-Tag4"]
let tagExcl5 = currentPage["Excluding-Tag5"]

let notes = dv.pages(tagRel 
			+ ' and -' + tagExcl1 
			+ ' and -' + tagExcl2 
			+ ' and -' + tagExcl3 
			+ ' and -' + tagExcl4 
			+ ' and -' + tagExcl5 
			+ ' and !"' + this.current().file.path + '"' )
			.where(p => !p.file.inlinks.includes(currentPage.file.link));

dv.list(notes.file.link);
~~~

# <% tp.file.title %>

