---
author:  
excerpt:  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
cover: 
date: 2022-07-13  
last-review: 2022-07-13  
---
Tags:: #note-creation 
~~~dataviewjs
let tags = this.current().file.etags
	.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#topic" && t!="#meeting-minutes" && t!="#day" );
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# QS1 - my first evergreen note
Hi, this is my first evergreen note.  It can be quickly created using the method in [[QS1_Add_your_first_notes]].

==Creating a new note in Obsidian is really easy.== 