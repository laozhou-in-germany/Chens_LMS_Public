---
fileClass: pillar  
sorting-index: 110 
pillar-category: 🟢live  
status-set2: 🟢active
date: 2022-04-23  
---

# 🏡Home & Household
More: [[110_🏛Pillars]]

## Value Goals
> Press `Ctrl + Q`  to add **🌟Value Goal** for this pillar  
```dataviewjs
let valueGoals = this.current().file.inlinks
	.map(l => dv.page(l))
	    .where(p => p["fileClass"]=="value-goal");
dv.table(
    ["Value Goal",   "Years", "Status"],
    valueGoals
		.map(p => [
		        p.file.link,
		        p["years"],
		        p["status"]
    ])
);
```






Where I sleep, where the closest people to me are, where I can design my environment to suit me best.
