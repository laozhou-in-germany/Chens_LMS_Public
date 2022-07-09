---
fileClass: value-goal  
priority: 3
status: 
date: <% tp.date.now("YYYY-MM-DD") %>  
start: 
finish: 
---

# <% tp.file.title %>
==> [[130_🌟Value_Goals]]

## Why?
Pillars:: 
> ？

>[!note]- All Pillars
>![[110_🏛Pillars#Pillar Overview Compact]]
## When?
Years:: [[2022]]  

## How?
Challenges:: 
> ?

### Outcomes
```button
name 🎯 New Outcome
type note(100_Goals_Projects/150_🎯Outcomes/New Outcome, split) template
action New-Outcome
```
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "outcome");
dv.table(
    ["Outcome", "Priority",  "Quarters", "Status", "Progress"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        p["status"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```
### Routines & Habits
```button
name 🔁 New Routine
type note(100_Goals_Projects/111_🔁Routines/New routine, split) template
action New-Routine
```
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "routine");
dv.table(
    ["Routine","Status", "Period",  "Day-time"],
    outcomes.map(p => [
        p.file.link,
        p["status"],
        p["period"],
        p["day-time"]
    ])
);
```
## Supporting
### Mindsets
```button
name 🤯 New Mindset
type note(100_Goals_Projects/112_🤯Mindsets/New Mindset, split) template
action New-Mindset
```
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "mindset");
dv.table(
    ["Mindset","Status", "Why"],
    outcomes.map(p => [
        p.file.link,
        p["mindset-status"],
        p["Why"],
    ])
);
```

### Topics
```button
name 🗩 New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"]=="topic");;
dv.table(
    ["Topic","Progress", "Evergreen"],
    outcomes.map(p => [
        p.file.link,
        "![pb|100](https://progress-bar.dev/"  + Math.round(
	        Math.max((dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length - p["notes-last-consolidation"]),0)
	        /p["notes-to-consolidate"]*100) + "/)",
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ])
);
```


## Notes
