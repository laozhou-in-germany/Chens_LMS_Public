---
alias:
- 🌟Value Goals
- 🌟Value Goals Dashboard
tags:
- dashboard
---
# 130_🌟Value_Goals
[[100_Goals_Projects#流水线 Pipeline]]

## Guide
[[Guide - How to Use Value Goal Dashboard]]



## Active & On Hold
~~~col
```button
name 🌟 New Value Goals
type note(100_Goals_Projects/130_🌟Value_Goals/New Value Goal, split) template
action New-Value-Goal
```
```button
name 🎯 New Outcome
type note(100_Goals_Projects/150_🎯Outcomes/New Outcome, split) template
action New-Outcome
```
```button
name 🔁 New Routine
type note(100_Goals_Projects/111_🔁Routines/New routine, split) template
action New-Routine
```
```button
name 🤯 New Mindset
type note(100_Goals_Projects/112_🤯Mindsets/New Mindset, split) template
action New-Mindset
```
```button
name 🗩 New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
~~~

```dataviewjs
let valueGoals = dv.pages('-"900_Supporting_Files"')
    .where(p => ((p["status"] == "🟢active")||p["status"] == "⏸on-hold") && p["fileClass"] == "value-goal")
    .sort(p => dv.page(p["Pillar"])["sorting-index"]);
dv.table(
    [ "Value Goals",  "Outcomes","Routine", "Pillars"], //, 
    valueGoals.map(p => [
        p.file.link,
        p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="outcome")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="routine")  
			.map(pp => pp.file.link), //output: link of outcome page
		p["Pillar"]
    ])
);
```
```dataviewjs
let valueGoals = dv.pages('-"900_Supporting_Files"')
    .where(p => ((p["status"] == "🟢active")||p["status"] == "⏸on-hold") && p["fileClass"] == "value-goal")
    .sort(p => dv.page(p["Pillar"])["sorting-index"]);
dv.table(
    [ "Value Goals", "Challenges", "Mindset", "Topic"], //, 
    valueGoals.map(p => [
        p.file.link,
        p["Challenges"],
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="mindset")  
			.map(pp => pp.file.link), //output: link of outcome page
		p.file.inlinks //output: link of value goal page  
			.map(l => dv.page(l)) //output: value goal page  
			.where(pp => pp["fileClass"]=="Topic")  
			.map(pp => pp.file.link) //output: link of outcome page
		
    ])
);
```

## Next Up
```dataviewjs
let valueGoals = dv.pages('-"900_Supporting_Files"')
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
let valueGoals = dv.pages('-"900_Supporting_Files"')
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
let valueGoals = dv.pages('-"900_Supporting_Files"')
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
let valueGoals = dv.pages('-"900_Supporting_Files"')
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