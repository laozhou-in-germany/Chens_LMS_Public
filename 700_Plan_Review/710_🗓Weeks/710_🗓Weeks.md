---
alias:
- 🗓Weeks
- 🗓Weeks Dashboard
tags:
- dashboard
---

# 710_🗓Weeks
```button
name New week
type command
action Periodic Notes: Open weekly note
```

## Last 4 Weeks
~~~dataview
table week-gratitude as "💖Gratitude", week-accomplishment as "🏆Accomplishment", week-success-factor as "🏆⚙️ Success Factor"
from -"900_Supporting_Files"
where date >= date(today)-dur(4 weeks) and date <=date(today) and fileClass ="week-note"
sort date desc
~~~

~~~dataview
table  week-disappointment as "😞Disappointment", week-low-cause as "😞⚙️Low Cause ", to-improve-next-week as "📈To Improve"
from -"900_Supporting_Files"
where date >= date(today)-dur(4 weeks) and date <=date(today) and fileClass ="week-note"
sort date desc
~~~