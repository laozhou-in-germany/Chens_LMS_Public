---
alias: ["🎉Events"]
---

# 320_🎉Events
```button
name 🎉New Event
type note(300_Journal/320_🎉Events/New Event, split) template
action New-Event
```
## Last 5 Events
~~~dataview
table without ID file.link as Event, category-event as Category
from -"900_Supporting_Files"
where fileClass = "event"
Sort date DESC
limit 5
~~~

^3f985b

