~~~dataviewjs
let tags = this.current().file.etags
let notes = tags
	.map(t => dv.pages(t + ' and !"' + this.current().file.path + '"'));
dv.list(notes.file.link);
~~~
