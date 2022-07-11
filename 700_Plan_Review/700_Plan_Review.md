---
alias:
- Plan & Review 
tags:
- dashboard
---

# 700_Plan_Review

## Weekly Insight

![[710_🗓Weeks]]

## Monthly Insight
![[730_📅Months]]


## Quarterly & Monthly Insight

![[750_⌛Quarters]]

## Annual Plan & Insight

```dataviewjs

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


