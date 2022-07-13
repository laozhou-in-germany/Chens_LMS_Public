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
# 111_🔁Routines
## Overview
```button
name 🔁 New Routine
type note(100_Goals_Projects/111_🔁Routines/New routine, split) template
action New-Routine
```

```dataviewjs
let routines = dv.pages('-"900_Supporting_Files"')
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
