---
alias:
- 🌲Evergreen Note
- 🌲Evergreen Note Dashboard
tags:
- dashboard
---

# 550_🌲Evergreen_Notes
```dataview
table  length(rows) as Number
from #evergreen-note
group by score
```

```dataview
table  length(rows) as Number
from #evergreen-note
group by status-evergreen-note
```
## Top-Down: Evergreen to research
~~~dataviewjs
let evergreen = dv.pages("#evergreen-note")
	.where(p => p["to-research"]=="y");
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"
	]       
    )
);
~~~


## Bottom-Up: Evergreen to consolidate
~~~dataviewjs
let evergreen = dv.pages("#evergreen-note")
	.where(p => p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length >=p ["notes-to-consolidate"] );
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"  
	]       
    )
);
~~~
## Seeded
### Seeded & Reviewed 2 months ago

```dataview
table status-evergreen-note as Status, last-revision as Last-Rev
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and status-evergreen-note = "seeded" and date(last-revision)<(date(today) - dur(2 months))
sort last-revision 
```

### Seeded All (#todo )

~~~dataviewjs
let evergreen = dv.pages('#evergreen-note and -"900 Templates"')
	.where(p => p["status-evergreen-note"]=="seeded");
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + (p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length )
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"
	]       
    )
);
~~~
 
## Growing
### Growing & Reviewed 2 months ago
```dataview
table status-evergreen-note as Status, last-revision as Last-Rev
where fileClass = "evergreen-note" and status-evergreen-note = "growing" and date(last-revision)<(date(today) - dur(2 months))
sort last-revision 
```

### Growing All
~~~dataviewjs
let evergreen = dv.pages('#evergreen-note and -"900 Templates"')
	.where(p => p["status-evergreen-note"]=="growing");
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"  
	]       
    )
);
~~~
 
 
## Mature
### Mature & Reviewed 2 months ago
```dataview
table status-evergreen-note as Status, last-revision as Last-Rev
where fileClass = "evergreen-note" and status-evergreen-note = "mature" and date(last-revision)<(date(today) - dur(2 months))
sort last-revision 
```

### Mature All
~~~dataviewjs
let evergreen = dv.pages('#evergreen-note and -"900 Templates"')
	.where(p => p["status-evergreen-note"]=="mature");
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"  
	]       
    )
);
~~~

## Finished
~~~dataviewjs
let evergreen = dv.pages('#evergreen-note and -"900 Templates"')
	.where(p => p["status-evergreen-note"]=="mature");
dv.table(
    ["evergreen","Status","last-revision","Ref notes"],
    evergreen.map(p =>[
        p.file.link,
        p["status-evergreen-note"],
        p["last-revision"],
        "![pb|100](https://progress-bar.dev/"  
	        + p.file.etags.where(t => t !="#literature-note" && t !="#atomic-note" && t!="#evergreen-note" && t!="#moc" && t!="#meeting-minutes" && t!="#day" ).flatMap(tt => dv.pages(tt + ' and !"' + p.file.path + '"').file.link).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)"  
	]       
    )
);
~~~

## Forgotten
```dataview
table status-evergreen-note as Status, last-revision as Last-Rev
where fileClass = "evergreen-note" and status-evergreen-note = "forgotten"
sort last-revision desc
``` 


## No Status
```dataview
table status-evergreen-note as Status, last-revision as Last-Rev
where fileClass = "evergreen-note" and !status-evergreen-note 
```
