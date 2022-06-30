---
fileClass: outcome  
priority: 3  
status: 
date: <% tp.date.now("YYYY-MM-DD") %>  
start:
target-finish: 
finish: 
total: 1
completed: 0
---

# <% tp.file.title %>
==>[[150 🎯Outcomes|🎯Outcomes Dashboard]]

## Why?
Value-Goal:: 
> [!note]- Open Value Goals
![[130 🌟Value Goals#Open - Compact Active On hold Next up Future]]

## When?
Quarters:: 

## What? (Mile Stones)
- [ ] Milestone 1

## How?
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"💎 New Project",
    folder:"100 🗻Action Pyramid/370 💎Projects",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
```
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "project" || p["fileClass"] == ("video-project"));
dv.table(
    ["Project", "Priority",  "Month", "Status", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["month"],
        p["status"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```

## Notes

