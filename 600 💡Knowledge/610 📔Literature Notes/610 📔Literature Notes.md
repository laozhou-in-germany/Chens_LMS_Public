---
alias:
- 📔Literature Note
- 📔Literature Note Dashboard
tags:
- dashboard
---
# 610 📔Literature Notes

```dataview
table  length(rows) as Number
where fileClass = "literature-note"
group by status-literature-note
```

```dataview
list
from -"900 Templates"
where fileClass = "literature-note" and !status-literature-note 
```

> Progressive summary

### Captured
```dataview
list
from -"900 Templates"
where fileClass = "literature-note" and status-literature-note = "captured"
```

## Bolded
### Bolded ⭐⭐⭐+ & Reviewed 2 weeks ago
```dataview
list 

where fileClass = "literature-note" and status-literature-note = "bolded" and ( score="xxx" or score ="xxxx" or score="xxxxx") and date(last-revision)<(date(today) - dur(2 weeks))
```

### Bolded ⭐⭐⭐+ 

```dataview
table category-literature-note as Category, last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "bolded" and ( score="xxx" or score ="xxxx" or score="xxxxx")
```

### Bolded ⭐/⭐⭐ - As Archive
 
```dataview
table category-literature-note as Category,  last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "bolded" and (score="x" or score ="xx" or !score)
```

## Highlighted
### Highlighted ⭐⭐⭐⭐+ & Reviewed 4 weeks ago
 
```dataview
list
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "highlighted" and (score ="xxxx" or score="xxxxx") and date(last-revision)<(date(today) - dur(4 weeks))
```

### Highlighted ⭐⭐⭐⭐+ 
 
```dataview
table category-literature-note as Category,  last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "highlighted" and (score ="xxxx" or score="xxxxx") 
```
 
### Highlighted ⭐⭐⭐ - As Resource
 
```dataview
table category-literature-note as Category,  last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "highlighted" and (score="x" or score ="xx" or score ="xxx" or !score)
```

## Summarized
### Summarized ⭐⭐⭐⭐⭐ & Reviewed 4 weeks ago
 
```dataview
list
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "summarized" and score="xxxxx" and date(last-revision)<(date(today) - dur(4 weeks))
```

### Summarized ⭐⭐⭐⭐⭐
 
```dataview
table category-literature-note as Category,  last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "summarized" and score="xxxxx"
```

### Summarized ⭐⭐⭐⭐ - To Remember
 
```dataview
table category-literature-note as Category, last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "summarized" and (score="x" or score ="xx" or score ="xxx" or score ="xxx" or !score)
```

## Remixed
 
```dataview
table category-literature-note as Category,  last-revision as Last-Rev
from "600 📝Drafts/Clipper" or "600 💡Knowledge"
where fileClass = "literature-note" and status-literature-note = "remixed"
```