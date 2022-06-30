---
alias:
- 🌟Value Goals
- 🌟Value Goals Dashboard
tags:
- dashboard
---
# 130 🌟Value Goals
[[100 🗻Action Pyramid#流水线 Pipeline]]

## Guide
### Guiding questions  
> Value goals focus on result: What kind of outcomes do I need? 
> Value goals focus on process: What kind of routines or habits do I need?
### Definition of Done
- For each values disired outcomes, routines(habits) or mindsets are created, which move me closer to the value goal.
	- **Outcomes**
		- [ ] Add new outcome, if needed
		- [ ] Update the status of outdated outcomes
		- [ ] Add new outcome, if old outcome completed / abandened 
	- **Routine** & **Mindset**
		- [ ] Add new routine & mindset, if needed
		- [ ] Update the status of outdated routine & mindset

- [ ] #task update mindset in Dashboard

## Active & On Hold
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌟 New Value Goal",
    folder:"100 🗻Action Pyramid/130 🌟Value Goals",
    nameFormat:"🌟yyyy-MM-dd-hhmmss",
    split:true
})
dv.span("| ")
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
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🔁 New routine",
    folder:"100 🗻Action Pyramid/111 🔁Routines",
    split:true
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🤯 new Mindset",
    folder:"100 🗻Action Pyramid/112 🤯Mindsets",
    split:true
})
```
```dataviewjs
let valueGoals = dv.pages()
    .where(p => ((p["status"] == "🟢active")||p["status"] == "⏸on-hold") && p["fileClass"] == "value-goal")
    .sort(p => dv.page(p["Pillar"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Outcomes","Routine", "Mindset", "Topic", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="Topic")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
    ])
);
```

## Next Up
```dataviewjs
let valueGoals = dv.pages()
    .where(p => (p["status"] == "🔜next-up") && p["fileClass"] == "value-goal" )
    .sort(p => dv.page(p["pillars"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Outcomes","Routine", "Mindset", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
    ])
);
```

## Future
```dataviewjs
let valueGoals = dv.pages()
    .where(p => (p["status"] == "✨future") && p["fileClass"] == "value-goal")
    .sort(p => dv.page(p["pillars"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Outcomes","Routine", "Mindset", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
    ])
);
```

## Completed & Abandon
```dataviewjs
let valueGoals = dv.pages()
    .where(p => ((p["status"] == "✅completed")||p["status"] == "️🗑️abandon") && p["fileClass"] == "value-goal" )
    .sort(p => dv.page(p["pillars"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Outcomes","Routine", "Mindset", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
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
    buttonName:"🌟 New Value Goal",
    folder:"100 🗻Action Pyramid/130 🌟Value Goals",
    nameFormat:"🌟yyyy-MM-dd-hhmmss",
    split:true
})
dv.span("| ")
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
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🔁 New routine",
    folder:"100 🗻Action Pyramid/111 🔁Routines",
    split:true
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🤯 new Mindset",
    folder:"100 🗻Action Pyramid/112 🤯Mindsets",
    split:true
})
```
```dataviewjs
let valueGoals = dv.pages("#value-goal")
    .where(p => (p["status"] == "🟢active")||p["status"] == "⏸on-hold" ||p["status"] == "🔜next-up" ||p["status"] == "✨future")
    .sort(p => dv.page(p["pillar"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Outcomes","Routine", "Mindset", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
    ])
);
```

## Open - Compact (Active, On hold, Next up & Future)
```dataviewjs
let valueGoals = dv.pages()
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold" ||p["status"] == "🔜next-up" ||p["status"] == "✨future") && p["fileClass"] == "value-goal")
    .sort(p => dv.page(p["pillar"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Pillars"],
    valueGoals.map(p => [
        p.file.link,
        p["pillar"] 
    ])
);
```