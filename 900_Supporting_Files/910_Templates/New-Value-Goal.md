---
fileClass: value-goal
status: 🟢active
date: <% tp.date.now("YYYY-MM-DD") %>  
---

# <% tp.file.title %>
More: [[130_🌟Value_Goals]]

Pillar:: {{LINKCURRENT}} 
Years:: [[<% tp.date.now("YYYY") %>]]  
<% tp.file.cursor(1) %>
## How?
> Press `Ctrl + Q`  to add **🎯Outcome** for this value goal  
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "outcome");
dv.table(
    ["Outcome",   "Quarter",  "Progress", "Status"],
    outcomes.map(p => [
        p.file.link,
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p["status"]
	    ])
);
```

## Supporting
> Press `Ctrl + Q`  to add **🔁Routine** for this value goal  
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "routine");
dv.table(
    ["Routine", "Why","Status"],
    outcomes.map(p => [
        p.file.link,
        p["why"],
        p["status-set2"]
    ])
);
```
> Press `Ctrl + Q`  to add **🤯Mindset** for this value goal  
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "mindset");
dv.table(
    ["Mindset","Why","Status"],
    outcomes.map(p => [
        p.file.link,
        p["Why"],
        p["status-set2"],
    ])
);
```

## Knowledge
```button
name 🗩New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
```dataviewjs
let outcomes = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"]=="topic");;
dv.table(
    ["Topic","Last Review"],
    outcomes.map(p => [
        p.file.link,
        p["last-review"],
 