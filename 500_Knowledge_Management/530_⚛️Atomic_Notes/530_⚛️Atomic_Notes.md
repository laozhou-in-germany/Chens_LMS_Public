---
alias:
- ⚛️Atomic Note  
- ⚛️Atomic Note Dashboard  
tags:
- dashboard
---
# 530_⚛️Atomic_Notes


> [!info] Story
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" and category-atomic-note="story"
> ```


> [!info] Aphorism 
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" and category-atomic-note="aphorism"
> ```


> [!info] Info
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" and category-atomic-note="info"
> ```


> [!info] Opinion
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" and category-atomic-note="opinion"
> ```


> [!info]- No category 
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" and !category-atomic-note
> ```


> [!info]- All 
> ```dataview
> table category-atomic-note as Category
>  or "600 📝Drafts"
> where fileClass = "atomic-note" 
> ``` 

