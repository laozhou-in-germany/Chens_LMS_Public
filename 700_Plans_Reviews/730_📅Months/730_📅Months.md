---
alias: ["📅Months","📅Months Dashboard"]
---

# 730_📅Months

```button
name 📅New Month
type command
action Periodic Notes: Open monthly note
```
## Last 3 Months
~~~dataview
table Theme as "Theme"
from -"900_Supporting_Files"
where date >= date(today)-dur(3 months) and date <=date(today) and fileClass = "month-note"
sort date desc
~~~

## Last 12 Months
~~~dataview
table Theme as "Theme"
from -"900_Supporting_Files"
where date >= date(today)-dur(12 months) and date <=date(today) and fileClass = "month-note"
sort date desc
~~~