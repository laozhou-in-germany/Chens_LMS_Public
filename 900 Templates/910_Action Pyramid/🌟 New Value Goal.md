---
fileClass: value-goal  
priority: 3
status: 
date: <% tp.date.now("YYYY-MM-DD") %>  
start: 
finish: 
---

# <% tp.file.title %>
==> [[130 🌟Value Goals|🌟Value Goals Dashboard]]

## Why?
Pillars:: 
> ？

>[!note]- All Pillars
>![[110 🏛Pillars#Pillar Overview Compact]]
## When?
Years:: [[2022]]  

## How?
Challenges:: 
> ?

### Outcomes
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🎯 New Outcome",
    folder:"100 🗻Action Pyramid/150 🎯Outcomes",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
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
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🔁 New routine / habit",
    folder:"100 🗻Action Pyramid/111 🔁Routines",
    split:true
})
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
### Mindsets
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🤯 new Mindset",
    folder:"100 🗻Action Pyramid/112 🤯Mindsets",
    split:true
})
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
