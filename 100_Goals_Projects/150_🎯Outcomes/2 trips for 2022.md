---
fileClass: outcome  
status: 🟢active
date: 2022-07-20  
total: 2
completed: 0
---

# 2 trips for 2022
==>[[150_🎯Outcomes]]

Value Goal:: [[Have healthy life style]]
Quarters:: [[2022-Q3]]  

## What? (Mile Stones)
- [ ] Trip 1
- [ ] Trip 2

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

