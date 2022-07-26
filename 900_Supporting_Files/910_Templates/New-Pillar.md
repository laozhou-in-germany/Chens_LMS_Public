---
fileClass: pillar  
sorting-index: 100
pillar-category: 
status-set2: 🟢active
date: <% tp.date.now("YYYY-MM-DD") %>  
---

# <% tp.file.title %>
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


