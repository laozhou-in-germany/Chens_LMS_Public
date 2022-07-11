---
fileClass: week-note  
date: {{date:YYYY-MM-DD}}  
---

[[{{date-7d:gggg-[W]ww}}]] <=> [[{{date+7d:gggg-[W]ww}}]]

# <% tp.file.title %>
==> [[710_🗓Weeks|🗓Weeks Dashboard]]

Days: [[{{date:YYYY-MM-DD}}]] => [[{{date+6d:YYYY-MM-DD}}]]

Year:: [[{{date:YYYY}}]]  
Quarter:: [[{{date:YYYY-[Q]Q}}]]  
Month:: [[{{date:YYYY-MM}}]]  
Last Week:: [[{{date-7d:gggg-[W]ww}}]]  

## I. Review  
### Daily routines 
[[🗓💖]]**Week Gratitude**::  ==...==  
[[🗓🏆]]**Week Accomplishment**:: ==...==  
[[🗓🏆⚙]]**Week Success Factor**:: ==...==  
[[🗓😞]]**Week Disappointment**:: ==...==  
[[🗓😞⚙]]**Week Low Cause**:: ==...==  
[[🗓📈]]**To Improve Next Week**:: ==...==  
~~~dataview
table week-day as "🌄Day", Gratitude as "💖Gratitude", that-frog as "🐸Frog",  Highlights as "🔆Highlights",  Disappointments as "😞Disappointments"
where date >= date({{date:YYYY-MM-DD}}) and date <= date({{date+6d:YYYY-MM-DD}}) and fileClass = "day-note"
sort date
~~~

### Daily note 
[[830 🌄Journal Notes|🌄Journal Notes]]
- [ ] add tags in daily note
- [ ] create or update evergreen note of the week


## II. Pipelines 

### Cleanup
- [ ] Review Flagged Emails, clear out.
- [ ] Process Physical Inbox
- [ ] Convert physical page note to digital note
- [ ] Convert quick capture (e.g. Google keep) to digital note 

### Calendar
[Google Kalender](https://calendar.google.com/calendar/u/0/r/month?tab=kc)
- [ ] Review last two weeks, Does anything need follow-up?
- [ ] Review upcoming 3 weeks, Need to prepare for anything?

### Tracking
- [ ] Review  [[170_💎Projects|💎Projects]]
![[170_💎Projects#Active On Hold]]
- [ ] Review "Waiting" Actions in Todoist
```todoist
{
"name": "My Tasks",
"filter": "@waiting"
}
```
- [ ] Time Blocking for next week: at least 5 hours for first things.

## III. Review Finished! 
- [ ] Add a new [[710_🗓Weeks|🗓Weeks]]

