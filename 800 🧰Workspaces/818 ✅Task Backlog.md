---
alias:
- ✅Task Backlog
tags:
- dashboard
---

# 818 ✅Task Backlog

```dataviewjs
const {DvActions} = customJS

DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌄 New Day",
    folder:"500 ♽ Cycles/520 🌄 Days",
    split:true,
    nameFormat: "yyyy-MM-dd",
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"📝 New Note",
    folder:"700 Vaults/Notes",
    split:true,
})
```

## Open tasks in 4 weeks
~~~tasks
not done
due before in four weeks
description does not include #migrated 
~~~
## Open tasks without due date
~~~tasks
not done
no due date 
description does not include #migrated 
~~~


## Todoist 
> [!todo] Today or Overdue
> ```todoist
> {
> "name": "My Tasks",
> "filter": "today | overdue"
> }
> ```


> [!todo]- 7 days
> ```todoist
> {
> "name": "My Tasks",
> "filter": "7 days"
> }
> ```


