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
==>[[150_🎯Outcomes]]

## Why?
Value-Goal:: 
> [!note]- Open Value Goals
![[130_🌟Value_Goals#Open - Compact Active On hold Next up Future]]

## When?
Quarters:: 

## What? (Mile Stones)
- [ ] Milestone 1

## How?
```button
name 💎 New Project
type note(100_Goals_Projects/170_💎Projects/New Project, split) template
action New-Project
```
```dataviewjs

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

