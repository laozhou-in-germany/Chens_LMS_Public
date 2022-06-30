---
fileClass: pillar  
sorting-index: 100
pillar-category: 
status: 
date: <% tp.date.now("YYYY-MM-DD") %>  
---
# <% tp.file.title %>
==>[[110 🏛Pillars|🏛Pillars Dashboard]]

## Guide
### Guiding questions  
> What are values goal in this pillar?
> Do I have proper knowledge to achieve them?
### Definition of Done
- **Value goals** for each pillar are comprehensively **created**
	- [ ] Add new value goals for each pillar
	- [ ] Update the status of outdated value goals
- **Topics** are **created** to archieve the value goals
	- Close knowledge gap
		- [ ] Add new Topics to achieved value goals 
		- [ ] For value goals with barriers: Change relevant MOC property "to-research" to "y" 

## Value Goal  
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌟 New Value Goals",
    folder:"100 🗻Action Pyramid/130 🌟Value Goals",
    split:true
})
```
```dataviewjs
let valueGoals = this.current().file.inlinks
	.map(l => dv.page(l))
	    .where(p => p["fileClass"]=="value-goal");
dv.table(
    ["Objective", "Priority",  "Years", "Status"],
    valueGoals
		.map(p => [
		        p.file.link,
		        p["priority"],
		        p["years"],
		        p["status"]
    ])
);
```


## Topics
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🗺️ New MOC",
    folder:"600 💡Knowledge/670 🗩Topics",
    split:true
})
```
```dataviewjs
let valueGoals
 = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"]=="topic");;
dv.table(
    ["Topic", "Status",  "Tags"],
    valueGoals
.map(p => [
        p.file.link + ((p["to-research"]=="y")? '🔎':'') ,
        p["topic"],
        p["Related-Tag"]
    ])
);
```
