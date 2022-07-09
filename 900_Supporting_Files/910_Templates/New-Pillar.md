---
fileClass: pillar  
sorting-index: 100
pillar-category: 
status: 
date: <% tp.date.now("YYYY-MM-DD") %>  
---

# <% tp.file.title %>
==>[[110_🏛Pillars]]

## Guide
[[Guide - How to Use Pillar Page]]

## Value Goal  
```button
name 🌟 New Value Goals
type note(100_Goals_Projects/130_🌟Value_Goals/New Value Goal, split) template
action New-Value-Goal
```
```dataviewjs
let valueGoals = this.current().file.inlinks
	.map(l => dv.page(l))
	    .where(p => p["fileClass"]=="value-goal");
dv.table(
    ["Objective", "Priority",  "Years", "Status"],
    valueGoals
		.map(p => [
		        p.file.link,
		        p["priority"],
		        p["years"],
		        p["status"]
    ])
);
```


## Topics
```button
name 🗩 New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
```dataviewjs
let valueGoals
 = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"]=="topic");;
dv.table(
    ["Topic", "Status",  "Tags"],
    valueGoals
.map(p => [
        p.file.link + ((p["to-research"]=="y")? '🔎':'') ,
        p["topic"],
        p["Related-Tag"]
    ])
);
```
