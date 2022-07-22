---
fileClass: value-goal
status: 🟢active
date: 2022-07-22  
---

# Create passive income to be financial indenpendent
More: [[130_🌟Value_Goals]]

Pillar:: [[💸Finance]]
Years:: [[2022]]  

## How?
```button
name 🎯New Outcome
type note(100_Goals_Projects/150_🎯Outcomes/New Outcome, split) template
action New-Outcome
```
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
```button
name 🔁New Routine
type note(100_Goals_Projects/111_🔁Routines/New routine, split) template
action New-Routine
```
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
```button
name 🤯New Mindset
type note(100_Goals_Projects/112_🤯Mindsets/New Mindset, split) template
action New-Mindset
```
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
    ])
);
```

## Notes
