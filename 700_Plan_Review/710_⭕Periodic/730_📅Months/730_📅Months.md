---
alias:
- 📅Months
- 📅Months Dashboard
tags:
- dashboard
---

# 730_📅Months
```button
name New week
type command
action Periodic Notes: Open monthly note
```

## Last 3 Months

~~~dataview
table Theme as "Theme"
from -"900 Templates"
where date >= date(today)-dur(3 months) and date <=date(today) and fileClass = "month-note"
sort date desc
~~~
