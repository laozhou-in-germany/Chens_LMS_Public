---
fileClass: outcome  
status: 🟢active
date: 2022-08-12  
total: 2
completed: 0
---

# 2 trips for 2022
More: [[150_🎯Outcomes]]

Value Goal:: [Have healthy life style](100_Goal_Management/130_🌟Value_Goals/Have%20healthy%20life%20style.md)  
Quarters:: [[2022-Q3]]  

## What? (Mile Stones)
- [ ] trip 1
- [ ] trip 2

## How?
> Press `Ctrl + Q`  to add **💎Project** or **📽Video Project** for this outcome  
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