---
alias: ["⌛Quarters","⌛Quarters Dashboard"]
---

# 750_⌛Quarters
```button
name ⌛New Quarter
type command
action Periodic Notes: Open quarterly note
```
## Last 4 Quarters
~~~dataview
table Working, not-working as "Not Working", Changes
from -"900_Supporting_Files"
where date >= date(today)-dur(12 months) and date <=date(today) and fileClass = "quarter-note"
sort date desc
~~~

