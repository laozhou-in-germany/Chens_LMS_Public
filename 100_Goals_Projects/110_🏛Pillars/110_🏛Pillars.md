---
alias: ["🏛Pillars", "🏛Pillars Dashboard"]
---

# 110_🏛Pillars

## Guiding Questions  
> What are the most important things in life (pillar, value goals)? 

### Definition of Done
- [ ] **Pillars** reflecting my current life focus are completely created, and status updated.
- [ ] **Value goals** for the pillar are created, and status updated. 

## All Pillars
```button
name 🏛New Pillar
type note(100_Goals_Projects/110_🏛Pillars/New Pillar, split) template
action New-Pillar
```
~~~dataview
table Without ID file.link as Pillar, pillar-category as Category, status-set2 as Status
from -"900_Supporting_Files"
where fileClass="pillar"
sort sorting-index
~~~
## Active Pillars (incl. open value goals)
*Open: Active, On hold, Next up & Future*
```dataviewjs
let outcomes = dv.pages('-"900_Supporting_Files"')
    .where(p => (p["status-set2"] == "🟢active") && p["fileClass"]=="pillar" )
    .sort(p => p["sorting-index"]);
dv.table(
    ["Active Pillars",  "Open Value Goals"],
    outcomes.map(p => [
        p.file.link,
        p.file.inlinks //output: link of outcome page
	        .map(l => dv.page(l)) //output: outcome page
		        .where(pp => (pp["fileClass"]=="value-goal") && (pp["status"] == "🟢active"||pp["status"] == "⏸on-hold"||pp["status"] == "🔜next-up"||pp["status"] == "✨future"))
		        .map(pp => pp.file.link) //output: link of project page
    ])
);
```

^0f1ad5

