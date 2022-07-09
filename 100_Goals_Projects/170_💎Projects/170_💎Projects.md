---
alias:
- 💎Projects
- 💎Projects Dashboard
tags:
- dashboard
---

# 170_💎Projects
[[100_Goals_Projects#流水线 Pipeline]]

## Active & On Hold
```button
name 💎 New Project
type note(100_Goals_Projects/170_💎Projects/New Project, split) template
action New-Project
```
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "🟢active")||p["status"] == "⏸on-hold")
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Months", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```

## Next Up
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "🔜next-up"))
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Months", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```


## Future
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "✨future"))
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Months", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```


## Completed & Abandon
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "✅completed")||p["status"] == "🗑️abandon")
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Months", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```
## Open (Active, On hold, Next up & Future)
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "🟢active")||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future")
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Months", "Progress"],
    projects.map(p => [
        p.file.link,
        p["priority"],
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```

## Open - Compact (Active, On hold, Next up & Future)
```dataviewjs
let projects = dv.pages("#project")
    .where(p => (p["status"] == "🟢active")||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future")
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Progress"],
    projects.map(p => [
        p.file.link,
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)"
    ])
);
```