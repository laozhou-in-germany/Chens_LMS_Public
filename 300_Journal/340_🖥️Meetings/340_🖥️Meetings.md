---
alias: ["🖥Meetings"]
---
# 340_🖥️Meetings
```button
name 🖥️New Meeting
type note(300_Journal/340_🖥️Meetings/New Meeting, split) template
action New-Meeting
```
## Last 5 Meetings
~~~dataview
table without ID file.link as Meeting, category-meeting as Category
from -"900_Supporting_Files"
where fileClass = "meeting-minute"
Sort date DESC
limit 5
~~~

^031cb1

## Last 25 Meetings
~~~dataview
table without ID file.link as Meeting, category-meeting as Category
from -"900_Supporting_Files"
where fileClass = "meeting-minute"
Sort date DESC
limit 25
~~~