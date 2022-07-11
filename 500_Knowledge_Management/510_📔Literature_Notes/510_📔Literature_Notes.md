---
alias:
- 📔Literature Note
- 📔Literature Note Dashboard
tags:
- dashboard
---
# 510_📔Literature_Notes
## Overview
~~~dataviewjs
let notes1 = dv.pages()
	.where(p => p["fileClass"]=="literature-note" && p["score"]=="x");
let n1 = notes1.length
let pb1 = n1
let p1 = "◷"


let notes2 = dv.pages()
	.where(p => p["fileClass"]=="literature-note" && p["score"]=="xx");
let n2 = notes2.length
let pb2 = n2
let p2 = "◔"


let notes3 = dv.pages()
	.where(p => p["fileClass"]=="literature-note" && p["score"]=="xxx");
let n3 = notes3.length
let pb3 = n3
let p3 = "◑"

let notes4 = dv.pages()
	.where(p => p["fileClass"]=="literature-note" && p["score"]=="xxxx");
let n4 = notes4.length
let pb4 = n4
let p4 = "◕"

let notes5 = dv.pages()
	.where(p => p["fileClass"]=="literature-note" && p["score"]=="xxxxx");
let n5 = notes5.length
let pb5 =  n5
let p5 = "●"

const table = dv.markdownTable(["Note Score","Note Number"],[[p1,pb1],[p2,pb2],[p3,pb3],[p4,pb4],[p5,pb5]],)
dv.paragraph(table)
~~~

## Captured
```dataview
list
from -"900_Supporting_Files"
where fileClass = "literature-note" and !reviewed 
```
## All Literature Notes
### All Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and length(score)>2 and length(score)>=(length(reviewed) + 2)
sort score
```
### All Ready for Next Review
> Reviewed 4 weeks ago, but no final review status reached.
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and length(score)>2 and length(score)>=(length(reviewed) + 2) and date(last-review)<(date(today) - dur(4 weeks))
sort score
```
### All Final Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and length(score)>2 and length(score)<(length(reviewed) + 2)
sort score
```

## Score: ◷ 
~~~ad-note
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="x" 
```
~~~
## Score: ◔
~~~ad-note
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xx" 
```
~~~
## Score: ◑ 
### ◑ Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxx"  and length(score)>=(length(reviewed) + 2)
```
### ◑ Final Reviewed
> At least 2 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxx" and length(score)<(length(reviewed) + 2)
```

## Score: ◕
### ◕ Interim Reviewed 
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxxx"  and length(score)>=(length(reviewed) + 2)

```
### ◕ Final Reviewed
> At least 3 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxxx" and length(score)<(length(reviewed) + 2)

```
## Score: ●
### ● Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxxxx"  and length(score)>=(length(reviewed) + 2)
```

### ● Final Reviewed
> At least 4 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "literature-note" and score="xxxxx" and length(score)<(length(reviewed) + 2)
```

