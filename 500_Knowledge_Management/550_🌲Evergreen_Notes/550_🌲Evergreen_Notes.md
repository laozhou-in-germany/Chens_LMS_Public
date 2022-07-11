---
alias:
- 🌲Evergreen Note
- 🌲Evergreen Note Dashboard
tags:
- dashboard
---
# 550_🌲Evergreen_Notes
## Overview
~~~dataviewjs
let notes1 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note" && p["score"]=="x");
let n1 = notes1.length
let pb1 = n1
let p1 = "◷"


let notes2 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note" && p["score"]=="xx");
let n2 = notes2.length
let pb2 = n2
let p2 = "◔"


let notes3 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note" && p["score"]=="xxx");
let n3 = notes3.length
let pb3 = n3
let p3 = "◑"

let notes4 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note" && p["score"]=="xxxx");
let n4 = notes4.length
let pb4 = n4
let p4 = "◕"

let notes5 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note" && p["score"]=="xxxxx");
let n5 = notes5.length
let pb5 =  n5
let p5 = "●"

const table = dv.markdownTable(["Note Score","Note Number"],[[p1,pb1],[p2,pb2],[p3,pb3],[p4,pb4],[p5,pb5]],)
dv.paragraph(table)
~~~

## Note with missing "score" or "reviewed"
```dataview
list
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and (!score or !reviewed)
```
## All Evergreen notes
### All Interim Reviewed
~~~ad-note
collapse: closed
```dataview
list
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed)
sort score
```
~~~

### All Ready for Next Review
> Reviewed 3 months ago, but no final review status reached.
~~~dataview
list
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed) and date(last-review)<(date(today) - dur(12 weeks))
sort score
~~~
### All Final Reviewed

~~~dataview
list
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)<length(reviewed)
sort score
~~~

## Score: ◷ 
~~~ad-note
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and score="x" 
```
~~~
## Score: ◔
~~~ad-note
collapse: closed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and score="xx" 
```
~~~
## Score: ◑ 
### ◑ Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed) and score="xxx"
```
### ◑ Final Reviewed
> At least 4 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)<length(reviewed) and score="xxx"
```

## Score: ◕
### ◕ Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed) and score="xxxx"
```
### ◕ Final Reviewed
> At least 5 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)<length(reviewed) and score="xxxx"
```

## Score: ●
### ● Interim Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed) and score="xxxxx"
```

### ● Final Reviewed
> At least 6 x Reviewed
```dataview
list 
from -"900_Supporting_Files"
where fileClass = "evergreen-note" and length(score)>=length(reviewed) and score="xxxxx"
```