---
alias:
- ⚛️Atomic Note  
- ⚛️Atomic Note Dashboard  
tags:
- dashboard
---
# 530_⚛️Atomic_Notes
## Overview
~~~dataviewjs
let notes1 = dv.pages()
	.where(p => p["fileClass"]=="atomic-note" && p["category-atomic-note"]=="story");
let n1 = notes1.length
let pb1 = n1
let p1 = "Story"


let notes2 = dv.pages()
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

## Opinion
```dataview
table category-atomic-note as Category
from -"900_Supporting_Files"
where fileClass = "atomic-note" and category-atomic-note="opinion"
```

