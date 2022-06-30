---
alias:
- 🎯Outcomes
- 🎯Outcomes Dashboard
tags:
- dashboard
---

# 150 🎯Outcomes
[[100 🗻Action Pyramid#流水线 Pipeline]]

## Guide
### Guiding questions  
> What kind of projects (actions) do I need to achieve the outcome.
### Definition of Done
- For each values disired outcomes, routines(habit) or mindset are created, which move me closer to the value goal.
	- **Project** 
		- [ ] Add new project in the outcome, if needed
		- [ ] Update the status of outdated project

## Active & On Hold
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🎯 New Outcome",
    folder:"100 🗻Action Pyramid/150 🎯Outcomes",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
dv.span("| ")
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"💎 New Project",
    folder:"100 🗻Action Pyramid/370 💎Projects",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
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
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🎯 New Outcome",
    folder:"100 🗻Action Pyramid/150 🎯Outcomes",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
dv.span("| ")
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"💎 New Project",
    folder:"100 🗻Action Pyramid/370 💎Projects",
    nameFormat:"yyyy-MM-dd-hhmmss",
    split:true
})
```
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