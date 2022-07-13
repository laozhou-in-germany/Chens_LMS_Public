---
alias:
- ⌛Quarters
- ⌛Quarters Dashboard
tags:
- dashboard
---

# 750_⌛Quarters

```button
name New week
type command
action Periodic Notes: Open quarterly note
```

```dataviewjs

let quarters = dv.pages('-"900_Supporting_Files"');
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

