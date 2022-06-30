---
alias:
- 🌏Years
- 🌏Years Dashboard
tags:
- dashboard
---

# 770 🌏Years

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌏 New Year",
    folder:"500 ♽ Cycles/590 🌏Years",
    nameFormat:"yyyy",
    split:true
})
```

## Years

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let years = dv.pages();
let sortedYears = years
    .where(p => p.file.name.length == 4 && p["fileClass"] == "year-note")
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Year", "Theme", "Quarters", "Value Goalls", "Outcomes"],
    sortedYears.map(p => [
        p.file.link,
        p["theme"],
        p["quarters"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p["fileClass"] == "objective" )
            .map(p => p.file.link),
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p["fileClass"] == "outcome")
            .map(p => p.file.link)
        
    ])
);
```
