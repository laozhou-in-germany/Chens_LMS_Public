---
alias:
- 🏛Pillars Dashboard
- 🏛Pillars
- Pillars
tags:
- dashboard
---
# 110 🏛Pillars

## Guide
### Guiding questions  
> What are first things (life focus, goals, knowledge)? 
### Definition of Done
- **Pillars** in each pillar category reflects my current life focus completely
	- [ ] Add new pillar for each category
	- [ ] Update the status of outdated pillar
- **Value goals** for each pillar are comprehensively **created**
	- [ ] Add new value goals for each pillar
	- [ ] Update the status of outdated value goals
- **Topics** are **created** to archieve the value goals
	- Exploring 
		- [ ] Add new Topics for *pillars*
	- Close knowledge gap
		- [ ] Add new Topics to achieved *value goals* 
		- [ ] For value goals with barriers: Change relevant topic property "to-research" to "y" 


## Pillar Overview
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🏛 New Pillar",
    folder:"100 🗻Action Pyramid/110 🏛Pillars",
    split:true
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌟 New Value Goals",
    folder:"100 🗻Action Pyramid/130 🌟Value Goals",
    split:true
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🗺️ New topic",
    folder:"600 💡Knowledge/770 🗺topic",
    split:true
})
```
~~~dataviewjs
const {Constants, ObsidianUtils} = customJS;
let pillars = dv.pages()
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
###### Legend
◷◔◑◕●:  Score 1 ~ 5
🔎:           To research
###### Related dashboard
[[130 🌟Value Goals|🌟Value Goals Dashboard]] | [[770 🗺topic|🗺topic Dashboard]]

## Pillar Overview Compact
~~~dataviewjs
const {Constants, ObsidianUtils} = customJS;
let pillars = dv.pages()
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