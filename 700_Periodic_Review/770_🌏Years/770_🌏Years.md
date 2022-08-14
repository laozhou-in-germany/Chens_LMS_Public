---
alias: ["🌏Years", "🌏Years Dashboard"]
---

# 770_🌏Years
```button
name 🌏New Year
type command
action Periodic Notes: Open yearly note
```
## Last 3 years
~~~dataview
table theme as Theme
from -"900_Supporting_Files"
where date >= date(today)-dur(36 months) and date <=date(today) and fileClass = "year-note"
sort date desc
~~~
