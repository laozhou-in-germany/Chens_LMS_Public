---
alias: ["📽Video Projects", "📽Video Projects Dashboard"]
---

# 171_📽Video_Projects

## All Projects
```button
name 📽️New Video Project
type note(100_Goal_Management/171_📽Video_Projects/New Video Project, split) template
action New-Video-Project
```
~~~dataview
table WITHOUT ID file.link as "Project", Months, status as Status
from -"900_Supporting_Files"
where fileClass="video-project"
~~~

## Open Projects  
*Open: Active, On hold, Next up & Future*
```dataviewjs
let projects = dv.pages('-"900_Supporting_Files"')
    .where(p => (p["status"] == "🟢active"||p["status"] == "⏸on-hold"||p["status"] == "🔜next-up"||p["status"] == "✨future") && p["fileClass"]=="video-project");
dv.table(
    ["Project", "Months","Workflow"],
    projects.map(p => [
        p.file.link,
        p["Months"],
        p["workflow"],
    ])
);
```

^3b9761

## Closed Outcomes
*Closed: Completed & Abandon*
```dataviewjs
let projects = dv.pages()
    .where(p => (p["status"] == "✅completed"||p["status"] == "🗑️abandon") && p["fileClass"]=="video-project");
dv.table(
    ["Project", "Months", "Status"],
    projects.map(p => [
        p.file.link,
        p["months"],
        p["status"]
    ])
);
```




