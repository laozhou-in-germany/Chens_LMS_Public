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
Tags::  #city-in-germany #berlin
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# QS - berlin
==⚠This note is a demo file for "Quick Start" in "README". You can safely delete it if you want.⚠==

Berlin is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city, according to population within city limits - [Berlin - Wikipedia](https://en.wikipedia.org/wiki/Berlin)