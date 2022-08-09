---
fileClass: outcome  
status: ✅completed
date: 2022-07-20  
total: 5
completed: 5
---

# Go swimming 5 time for 2022
==>[[150_🎯Outcomes]]

## Why?
Value Goal:: [[Have healthy life style]]

## Wenn?
Quarters:: [[2022-Q3]]  

## What? (Mile Stones)
- [x] Swimming 1
- [x] Swimming 2
- [x] Swimming 3
- [x] Swimming 4
- [x] Swimming 5

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
==⚠This note is a demo file. You can safely delete it if you want.⚠==