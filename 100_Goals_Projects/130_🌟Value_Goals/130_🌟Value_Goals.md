---
alias: ["🌟Value Goals","🌟Value Goals Dashboard"]
---

# 130_🌟Value_Goals

## Guiding Questions  
> Result-oriented: What kind of outcomes do I need, to move me closer to the value goal? 
> Process-oriented: What kind of routines or mindsets do I need, to move me closer to the value goal?

### Definition of Done
- [ ] **Outcomes** for the value goal are created(if needed), and the status is updated. 
- [ ] **Routines & Mindsets** for the value goal are created(if needed), and the status is updated. 

## All Value Goals
```button
name 🌟New Value Goal
type note(100_Goals_Projects/130_🌟Value_Goals/New Value Goal, split) template
action New-Value-Goal
```
~~~dataview
table WITHOUT ID file.link as "Value Goal", Years, status as Status
from -"900_Supporting_Files"
where fileClass="value-goal"
~~~
## Open Value Goals (including open outcomes) 
*Open: Active, On hold, Next up & Future*
```dataviewjs
let outcomes = dv.pages('-"900_Supporting_Files"')
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="value-goal" );
dv.table(
    ["Open Value Goals",  "Open Outcomes"],
    outcomes.map(p => [
        p.file.link,
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => (pp["fileClass"]=="outcome") && (pp["status"] == "🟢active"||pp["status"] == "⏸on-hold"||pp["status"] == "🔜next-up"||pp["status"] == "✨future"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

^0ec475


## Closed Value Goals
*Closed: Completed & Abandon*

~~~dataview
table WITHOUT ID file.link as "Value Goal", Years, status as Status
from -"900_Supporting_Files"
where fileClass="value-goal" and (status = "✅completed" or status = "🗑️abandon")
~~~

