---
fileClass: pillar  
sorting-index: 200
pillar-category: 🟠love  
status-set2: 🟢active
date: 2022-04-23  
---

# 🎂Family
More: [[110_🏛Pillars]]

## Value Goal  
```button
name 🌟New Value Goal
type note(100_Goals_Projects/130_🌟Value_Goals/New Value Goal, split) template
action New-Value-Goal
```
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

