---
fileClass: pillar  
sorting-index: 150
pillar-category: 🟢live
status-set2: 🟢active  
date: 2022-07-18  
---

# 🔑Admin
More: [[110_🏛Pillars]]

## Value Goals
> Press `Ctrl + Q`  to add **🌟Value Goal** for this pillar  
```dataviewjs
let valueGoals = this.current().file.inlinks
	.map(l => dv.page(l))
	    .where(p => p["fileClass"]=="value-goal");
dv.table(
    ["Value Goal", "Priority",  "Years", "Status"],
    valueGoals
		.map(p => [
		        p.file.link,
		        p["priority"],
		        p["years"],
		        p["status"]
    ])
);
```


