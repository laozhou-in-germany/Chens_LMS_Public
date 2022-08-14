---
fileClass: pillar  
sorting-index: 400
pillar-category: 🟡legacy
status-set2: 🟢active  
date: 2022-04-23  
---

# 💼Engineer
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



