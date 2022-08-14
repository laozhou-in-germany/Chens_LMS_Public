---
alias: ["💎Projects", "💎Projects Dashboard"]
---

# 170_💎Projects

## All Projects
```button
name 💎 New Project
type note(100_Goal_Management/170_💎Projects/New Project, split) template
action New-Project
```
~~~dataview
table WITHOUT ID file.link as "Project", Months, status as Status
from -"900_Supporting_Files"
where fileClass="project"
~~~

## Open Projects  
*Open: Active, On hold, Next up & Future*
```dataviewjs
let projects = dv.pages('-"900_Supporting_Files"')
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="project");
dv.table(
    ["Project", "Months","Progress"],
    projects.map(p => [
        p.file.link,
        p["Months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
    ])
);
```

^f3ab3d

## Closed Outcomes
*Closed: Completed & Abandon*
```dataviewjs
let projects = dv.pages()
    .where(p => (p["status"] == "✅completed"||p["status"] == "🗑️abandon") && p["fileClass"]=="project");
dv.table(
    ["Project", "Months", "Status"],
    projects.map(p => [
        p.file.link,
        p["months"],
        p["status"]
    ])
);
```

