---
alias:
- 🎯Outcomes
- 🎯Outcomes Dashboard
tags:
- dashboard
---

# 150_🎯Outcomes
[[100_Goals_Projects#流水线 Pipeline]]

## Guide
[[Guide - How to Use Outcome Dashboard]]


## Active & On Hold
```button
name 🎯 New Outcome
type note(100_Goals_Projects/150_🎯Outcomes/New Outcome, split) template
action New-Outcome
```
```button
name 💎 New Project
type note(100_Goals_Projects/170_💎Projects/New Project, split) template
action New-Project
```
```dataviewjs
let outcomes = dv.pages()
    .where(p => ((p["status"] == "🟢active")||p["status"] == "⏸on-hold" ) && p["fileClass"]=="outcome")
    .sort(p => p["date"], 'desc');
dv.table(
    ["Outcome", "Priority",  "Quarters", "Progress", "Projects"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => pp.file.tags.includes("#project")||pp.file.tags.includes("#video-project"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

## Next Up
```dataviewjs
let outcomes = dv.pages()
    .where(p => (p["status"] == "🔜next-up") && p["fileClass"]=="outcome" )
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority",  "Quarters", "Progress", "Projects"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => pp.file.tags.includes("#project")||pp.file.tags.includes("#video-project"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

## Future
```dataviewjs
let outcomes = dv.pages()
    .where(p => (p["status"] == "✨future") && p["fileClass"]=="outcome" )
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority",  "Quarters", "Progress", "Projects"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => pp.file.tags.includes("#project")||pp.file.tags.includes("#video-project"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

## Completed & Abandon
```dataviewjs
let outcomes = dv.pages()
    .where(p => (p["status"] == "✅completed"||p["status"] == "️🗑️abandon") && p["fileClass"]=="outcome")
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority",  "Quarters", "Progress", "Projects"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => pp.file.tags.includes("#project")||pp.file.tags.includes("#video-project"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

## Open (Active, On hold, Next up & Future)

```dataviewjs
let outcomes = dv.pages()
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="outcome" )
    .sort(p => p["date"], 'desc');
dv.table(
    ["Outcome", "Priority",  "Quarters", "Progress", "Projects"],
    outcomes.map(p => [
        p.file.link,
        p["priority"],
        p["quarters"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => pp.file.tags.includes("#project")||pp.file.tags.includes("#video-project"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

## Open - Compact (Active, On hold, Next up & Future)
```dataviewjs
let outcomes = dv.pages()
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="outcome" )
    .sort(p => p["date"], 'desc');
dv.table(
    ["Outcome",  "Progress"],
    outcomes.map(p => [
        p.file.link,
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
    ])
);
```