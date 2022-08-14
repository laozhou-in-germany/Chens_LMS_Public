---
alias: ["🗩Topics","🗩Topic Dashboard"]
---

# 570_🗩Topics

```button
name 🗩New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
## Guiding questions  
> What kind of insight can I consolidate the knowledge from all related notes?
### Definition of Done
No remaining Not processed Notes. 

## Recent topics
~~~dataviewjs
let topics = dv.pages('-"900_Supporting_Files"')
	.sort(p => p.file.mtime, "desc")
	.where(p => p["fileClass"]=="topic")
	.limit(20);
dv.table(
    ["Topic","Value-Goal"],
    topics.map(p =>[
        p.file.link,
        p["Value-Goal"]
    ]
    )
);
~~~
## Topic with value goal
~~~dataviewjs
let topics = dv.pages('-"900_Supporting_Files"')
	.sort(p => p["Value-Goal"], "desc")
	.where(p => p["fileClass"]=="topic" && p["Value-Goal"])
	.limit(40);
dv.table(
    ["Topic","Value-Goal"],
    topics.map(p =>[
        p.file.link,
        p["Value-Goal"]
    ]
    )
);
~~~

## Score: ◷ 
~~~ad-note
title: Click to reveal the content
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="x" 
```
~~~

## Score: ◔
~~~ad-note
title: Click to reveal the content
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="xx" 
```
~~~

## Score: ◑ 
~~~ad-note
collapse: open
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="xxx" 
```
~~~

## Score: ◕
~~~ad-note
collapse: open
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="xxxx" 
```
~~~

## Score: ●
~~~ad-note
collapse: open
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="xxxxx" 
```
~~~


