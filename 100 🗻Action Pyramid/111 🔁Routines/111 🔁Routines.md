---
alias:
- 🔁Routines Dashboard
- 🔁Routines
- Routines
- 🔁Habits
- Habits
tags:
- dashboard
---
# 111 🔁Routines
## Overview
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🔁 New routine / habit",
    folder:"100 🗻Action Pyramid/111 🔁Routines",
    split:true
})
```
```dataviewjs
let routines = dv.pages()
	.where(p => p["status"] && p["fileClass"] == "routine"  )
dv.table(
    [ "Routine", "Status", "Period", "Day Time", "Why", "Pillar","Value Goal"],
    routines.map(p => [
        p.file.link,
        p["status"],
        p["period"],
        p["day-time"],
        p["Why"],
        p["Pillar"],
        p["Value-Goal"]
    ])
);
```
