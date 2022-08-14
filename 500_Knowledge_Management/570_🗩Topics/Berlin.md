---
alias: ["#berlin"]
excerpt:  
fileClass: topic  
score: x  
category-topic:   
reviewed: x  
cover: 
date: 2022-07-14  
last-review: 2022-07-14  
---
Value-Goal::  
Related-Tag:: #berlin 

**Not Processed Notes**
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

# Berlin
==⚠This note is a demo file. You can safely delete it if you want.⚠==

## General
Berlin is the capital of Germany, has a long history and is a city of culture. 


## History
The **history of Berlin** starts with its foundation in the 13th century.
more see: [[History of Berlin]]

## Quotation 
[[Ich bin ein Berliner - Kennedy]]
To collect more quotations about berlin.
