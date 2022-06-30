---
alias:
- ⭕Cycle Zone
tags:
- dashboard
---

# 870 ⭕Cycle Zone

## Weekly Insight

![[710 🗓Weeks]]

## Monthly Insight
![[730 📅Months]]


## Quarterly & Monthly Insight

![[750 ⌛Quarters]]

## Annual Plan & Insight

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let years = dv.pages("#year");
let activeYears = years
    .where(p => p.file.name == luxon.DateTime.now().toFormat("yyyy"))
    .sort(p => p.file.name, 'asc');
activeYears.mutate(p => {
    p["objectives"] = p.file.inlinks
        .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#objective"));
    p["outcomes"] = p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p["fileClass"] == "outcome");
})
dv.table(
    ["Year", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Objectives⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Outcomes⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeYears.map(p => [
        p.file.link,
        p["objectives"].map(p => p.file.link),
        p["outcomes"].map(p => p.file.link),
        p["status"]
    ])
);
```


