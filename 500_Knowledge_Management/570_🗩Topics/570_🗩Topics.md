---
alias:
- 🗩Topic
- 🗩Topic Dashboard
tags:
- dashboard
---
# 570_🗩Topics
## Guiding questions  
> What kind of insight can I consolidate the knowledge from all related notes?
### Definition of Done
No remaining unprocessed Notes. 



## Recent topics
~~~dataviewjs
let topics = dv.pages('-"900_Supporting_Files"')
	.sort(p => p.file.mtime, "desc")
	.where(p => p["fileClass"]=="topic")
	.limit(20);
dv.table(
    ["Topic","Pillar","Value-Goal"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"]
    ]
    )
);
~~~


## Score: ◷ 
~~~ad-note
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "topic" and score="x" 
```
~~~

## Score: ◔
~~~ad-note
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


