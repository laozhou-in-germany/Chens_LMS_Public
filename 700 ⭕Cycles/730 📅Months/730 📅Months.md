---
alias:
- 📅Months
- 📅Months Dashboard
tags:
- dashboard
---

# 730 📅Months

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"📅 New Month",
    folder:"800 ⭕ Cycles/730 📅Months",
    nameFormat:"yyyy-MM",
    split:true
})
```

## Last 3 Months

~~~dataview
table Theme as "Theme"
from -"900 Templates"
where date >= date(today)-dur(3 months) and date <=date(today) and fileClass = "month-note"
sort date desc
~~~
