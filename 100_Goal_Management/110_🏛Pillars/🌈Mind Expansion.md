---
fileClass: pillar  
sorting-index: 310
pillar-category: 🔵learn  
status-set2: 🟢active
date: 2022-04-23  
---

# 🌈Mind Expansion
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

