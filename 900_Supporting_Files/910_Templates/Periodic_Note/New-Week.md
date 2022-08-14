---
fileClass: week-note  
date: {{date:YYYY-MM-DD}}  
---

[[{{date-7d:gggg-[W]ww}}]] <=> [[{{date+7d:gggg-[W]ww}}]]

# <% tp.file.title %>
More: [[../../../700_Periodic_Review/710_❇Weeks/710_❇Weeks|❇Weeks Dashboard]]

Days: [[{{date:YYYY-MM-DD}}]] => [[{{date+6d:YYYY-MM-DD}}]]

Year:: [[{{date:YYYY}}]]  
Quarter:: [[{{date:YYYY-[Q]Q}}]]  
Month:: [[{{date:YYYY-MM}}]]  
Last Week:: [[{{date-7d:gggg-[W]ww}}]]  

## I. Cleanup
- [ ] Review flagged Emails, and clear out.
- [ ] Process physical Inbox
- [ ] Convert physical page notes to digital notes
- [ ] Convert quick capture (e.g. Google keep) to digital notes 

## II. Journal
### Daily routines 
[[❇💖]]**Week Gratitude**::  ==...==  
[[❇🏆]]**Week Accomplishment**:: ==...==  
[[❇🏆⚙]]**Week Success Factor**:: ==...==  
[[❇😞]]**Week Disappointment**:: ==...==  
[[❇😞⚙]]**Week Low Cause**:: ==...==  
[[❇📈]]**To Improve Next Week**:: ==...==  
~~~dataview
table week-day as "🌄Day", Gratitude as "💖Gratitude",  Highlights as "🔆Highlights",  Disappointments as "😞Disappointments"
where date >= date({{date:YYYY-MM-DD}}) and date <= date({{date+6d:YYYY-MM-DD}}) and fileClass = "day-note"
sort date
~~~

### Daily notes, Events and Meeting
[[310_🌄Daily|🌄Journal Notes]]
[[320_🎉Events|🎉Event Dashboard]]
[[340_🖥️Meetings|🖥Meeting Dashboard]]
- [ ] Add tags in daily notes, events and meeting minutes of the week
- [ ] Create or update evergreen note for them


## III. Goals & Projects
*Including task management out of the Obsidian vault*

### Task planning 
[Google Calendar](https://calendar.google.com/calendar/u/0/r/month?tab=kc)
- [ ] Review the last two weeks, Does anything need follow-up?
- [ ] Review the upcoming 3 weeks, Need to prepare for anything?
- [ ] Blocking time for next week: at least 5 hours for first things.
- [ ] Review Open  [[170_💎Projects|💎Projects]], and plan tasks in Calendar. 
![[170_💎Projects#^f3ab3d]]

## IV. Review Finished! 
- [ ] Create a new week in [[../../../700_Periodic_Review/710_❇Weeks/710_❇Weeks|❇Weeks]] 

> [!hint] Congratulation!
> Congratulation, Your tasks for the next week are well planned.
> Focus on **Get Things Done.**

