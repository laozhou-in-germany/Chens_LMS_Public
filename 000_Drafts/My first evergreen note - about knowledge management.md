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

# My first evergreen note - about knowledge management
Hi, this is my first evergreen note.  It can be quickly created using the method in [[../900_Supporting_Files/991_Readme/QS_Add_the_first_note]].

==Creating a new note in Obsidian is really easy.== 