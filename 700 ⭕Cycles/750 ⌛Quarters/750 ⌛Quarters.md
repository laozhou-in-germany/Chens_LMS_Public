---
alias:
- ⌛Quarters
- ⌛Quarters Dashboard
tags:
- dashboard
---

# 750 ⌛Quarters


```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"⌛️ New Quarter",
    folder:"800 ⭕ Cycles/750 ⌛Quarters",
    nameFormat:"yyyy-Qq",
    split:true
})
```
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let quarters = dv.pages();
let activeQuarters = quarters
    .where(p => p.file.name.startsWith(luxon.DateTime.now().toFormat("yyyy")) && p["fileClass"] == "quarter-note")
    .sort(p => p.file.name, 'asc');
activeQuarters.mutate(p => {
    p["projects"] = p.file.inlinks
        .map(l => dv.page(l))
        .where(p => p["fileClass"] == "project");
})
dv.table(
    ["Quarter", "Active Projects", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Projects⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeQuarters.map(p => [
        p.file.link,
        p["projects"]
            .where(p => p["status"] == Constants.project.status.active)
            .length,
        p["projects"].map(p => p.file.link),
        p["status"]
    ])
);
```

## Previous

