---
author:  
excerpt:  
fileClass: evergreen-note
score: x  
category-evergreen-note:  
reviewed: x  
cover: 
date: 2022-01-14  
last-review: 2022-01-14  
---
Tags:: #city-in-germany 
~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~

# German cities are beautiful
==⚠This note is a demo file. You can safely delete it if you want.⚠==

I visited a lots of the cities in German. They are beautiful.
