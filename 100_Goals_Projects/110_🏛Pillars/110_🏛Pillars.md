---
alias:
- 🏛Pillars Dashboard
- 🏛Pillars
- Pillars
tags:
- dashboard
---
# 110_🏛Pillars

## Guide
[[Guide - How to Use Pillar Dashboard]]

~~~col 
```button
name 🏛 New Pillar
type note(100_Goals_Projects/110_🏛Pillars/New Pillar, split) template
action New-Pillar
```
```button
name 🌟 New Value Goals
type note(100_Goals_Projects/130_🌟Value_Goals/New Value Goal, split) template
action New-Value-Goal
```
```button
name 🗩 New Topic
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
~~~


## Pillar Overview
~~~dataviewjs

let pillars = dv.pages('-"900_Supporting_Files"')
	.where(p => p["pillar-category"] && p["fileClass"] == "pillar")
	.sort(p => p["sorting-index"]);
dv.table(
    ["Pillars", "Category", "Status", "Value Goal" ],
    pillars.map(p => [
        p.file.link,
        p["pillar-category"],
        p["status"],
        p.file.inlinks
            .map(l => dv.page(l))
	            .where(p => p["fileClass"]=="value-goal")
	            .map(p => p.file.link),
        
    ])
);
~~~

**Related dashboard:**
[[130_🌟Value_Goals]] 

## Pillar Overview Compact
~~~dataviewjs

let pillars = dv.pages('-"900_Supporting_Files"')
	.where(p => p["pillar-category"] && p["fileClass"] == "pillar" )
	.sort(p => p["sorting-index"]);
dv.table(
    ["Category", "Pillars" ],
    pillars.map(p => [
        p["pillar-category"],
        p.file.link,
    ])
);
~~~
## Reference
- [[First Things First - 3. to live, to love, to learn, to leave a legacy]]