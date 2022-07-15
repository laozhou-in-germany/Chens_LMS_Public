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
Pillar:: [[💦Others]] 
Value-Goal::  
Related-Tag:: #berlin 

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

# QS - Berlin
==⚠This note is a demo file for "Quick Start" in "README". You can safely delete it if you want.⚠==

## General
Berlin is the capital of Germany, has a long history and is a city of culture. 


## History
The **history of Berlin** starts with its foundation in the 13th century.
more see: [QS - History of Berlin](../500_Knowledge_Management/510_📔Literature_Notes/QS%20-%20History%20of%20Berlin.md)

## Quotation 
[Ich bin ein Berliner - Kennedy](../500_Knowledge_Management/530_⚛️Atomic_Notes/Ich%20bin%20ein%20Berliner%20-%20Kennedy.md)
To collect more quotations about berlin.
