---
alias: ["🎯Outcomes","🎯Outcomes Dashboard"]
---

# 150_🎯Outcomes

## Guiding Questions  
> How to achieve the outcomes?

### Definition of Done
- [ ] **Milestones** defined and finished milestones are checked.
- [ ] **Projects** in the outcome are created (if needed), and the status is updated.

## All Outcomes
```button
name 🎯New Outcome
type note(100_Goals_Projects/150_🎯Outcomes/New Outcome, split) template
action New-Outcome
```
~~~dataview
table WITHOUT ID file.link as "Outcome", Quarters, status as Status
from -"900_Supporting_Files"
where fileClass="outcome"
~~~
## Open Outcomes (including open projects) 
*Open: Active, On hold, Next up & Future*
```dataviewjs
let outcomes = dv.pages('-"900_Supporting_Files"')
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="outcome" )
    .sort(p => p["date"], 'desc');
dv.table(
    ["Open Outcome",  "Progress", "Open Projects"],
    outcomes.map(p => [
        p.file.link,
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => (pp["fileClass"]=="project"||pp["fileClass"]=="video-project") && (pp["status"] == "🟢active"||pp["status"] == "⏸on-hold"||pp["status"] == "🔜next-up"||pp["status"] == "✨future"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

^0592b0

## Closed Outcomes
*Closed: Completed & Abandon*
~~~dataview
table WITHOUT ID file.link as "Outcome", Quarters, status as Status
from -"900_Supporting_Files"
where fileClass="outcome" and (status = "✅completed" or status = "🗑️abandon")
~~~

