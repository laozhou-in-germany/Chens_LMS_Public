---
alias: ["🔁Routines","🔁Routines Dashboard"]
---

# 111_🔁Routines
## All Routines
```button
name 🔁New Routine
type note(100_Goal_Management/111_🔁Routines/New routine, split) template
action New-Routine
```
```dataview
TABLE WITHOUT ID
    file.link as "Routine",
    day-time as "Day Time",
    Value-Goal as "Value Goal",
    status-set2 as "Status"
from -"900_Supporting_Files"
where fileClass = "routine" 
SORT Value-Goal desc
```
## Active Routines
```dataview
TABLE WITHOUT ID
    file.link as "Routine",
    day-time as "Day Time",
    Why as "Why",
    Value-Goal as "Value Goal"
from -"900_Supporting_Files" 
where fileClass = "routine" and status-set2 = "🟢active"
SORT Value-Goal desc
```

^fb9758

