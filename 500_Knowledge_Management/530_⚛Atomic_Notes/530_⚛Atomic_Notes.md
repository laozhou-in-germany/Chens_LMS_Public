---
alias: ["⚛️Atomic Notes","⚛️Atomic Note Dashboard"]
---

# 530_⚛Atomic_Notes
## Overview
```button
name ⚛️New Atomic Note
type note(500_Knowledge_Management/530_⚛️Atomic_Notes/New Atomic Note, split) template
action New-Atomic-Note
```
~~~dataviewjs
let notes1 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="atomic-note" && p["category-atomic-note"]=="story");
let n1 = notes1.length
let pb1 = n1
let p1 = "Story"


let notes2 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="atomic-note" && p["category-atomic-note"]=="aphorism");
let n2 = notes2.length
let pb2 = n2
let p2 = "Aphorism"




const table = dv.markdownTable(["Note Score","Note Number"],[[p1,pb1],[p2,pb2]],)
dv.paragraph(table)
~~~

## Story
```dataview
table category-atomic-note as Category
from -"900_Supporting_Files"
where fileClass = "atomic-note" and category-atomic-note="story"
```

## Aphorism
```dataview
table category-atomic-note as Category
from -"900_Supporting_Files"
where fileClass = "atomic-note" and category-atomic-note="aphorism"
```



