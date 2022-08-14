---
alias: ["🤯Mindsets", "🤯Mindsets Dashboard"]
---

# 112_🤯Mindsets
## All Mindsets
```button
name 🤯New Mindset
type note(100_Goal_Management/112_🤯Mindsets/New Mindset, split) template
action New-Mindset
```
```dataview
TABLE WITHOUT ID
    file.link as "Mindset",
    Value-Goal as "Value Goal",
    status-set2 as "Status"
from -"900_Supporting_Files"
where fileClass = "mindset" 
SORT Value-Goal desc
```
## Active Mindsets
```dataview
TABLE WITHOUT ID
    file.link as "Mindset",
    Why as "Why",
    Value-Goal as "Value Goal"
from -"900_Supporting_Files"
where fileClass = "mindset" and status-set2 = "🟢active"
SORT Value-Goal desc
```

^3db19d

