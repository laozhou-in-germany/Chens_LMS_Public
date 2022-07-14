---
author:  
excerpt:  
fileClass: literature-note  
score: xx 
category-literature-note: article  
reviewed: x  
cover:  
date: 2022-07-14  
last-review: 2022-07-14  
---
Tags:: #city-in-germany 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# QS - munich
==⚠This note is a demo file for "Quick Start" in "README". You can safely delete it if you want.⚠==

Munich  is the capital and most populous city of the German state of Bavaria. With a population of 1,558,395 inhabitants as of 31 July 2020, it is the third-largest city in Germany, after Berlin and Hamburg, and thus the largest which does not constitute its own state, as well as the 11th-largest city in the European Union. - [Munich - Wikipedia](https://en.wikipedia.org/wiki/Munich)