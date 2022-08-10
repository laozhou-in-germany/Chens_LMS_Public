---
fileClass: outcome  
status: 🟢active
date: <% tp.date.now("YYYY-MM-DD") %>  
total: 1
completed: 0
---

# <% tp.file.title %>
More: [[150_🎯Outcomes]]

Value Goal::  
Quarters:: [[<% tp.date.now("YYYY-[Q]Q") %>]]  

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
    ["Project",  "Months", "Progress","Status"],
    projects.map(p => [
        p.file.link,
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p["status"],
    ])
);
```

## Notes

