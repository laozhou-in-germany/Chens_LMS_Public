---
alias: []
excerpt:  
fileClass: topic  
score: x  
category-topic:   
reviewed: x  
cover: 
date: 2022-08-14  
last-review: 2022-08-14  
---
Value-Goal::  
Related-Tag:: #dummytopic

**Not processed Notes**
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

# New Topic

