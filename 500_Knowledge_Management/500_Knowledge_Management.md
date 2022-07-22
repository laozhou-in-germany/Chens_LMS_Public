---
alias: ["Knowledge"]
last-review: 2022-07-19
---
# 500_Knowledge_Management
~~~col
```button
name New📔 
type note(500_Knowledge_Management/510_📔Literature_Notes/New Literature Note, split) template
action New-Literature-Note
```
```button
name New⚛️
type note(500_Knowledge_Management/530_⚛️Atomic_Notes/New Atomic Note, split) template
action New-Atomic-Note
```
```button
name New🌲
type note(500_Knowledge_Management/550_🌲Evergreen_Notes/New Evergreen Note, split) template
action New-Evergreen-Note
```
```button
name New🗩
type note(500_Knowledge_Management/570_🗩Topics/New Topic, split) template
action New-Topic
```
~~~
## Overview
[[501_💡Home_Node|💡Knowlege Home Node]]

~~~dataviewjs
let notes1 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="literature-note");
let n1 = notes1.length
let pb1 = "<progress value='" + n1+ "' max='250'></progress>" +n1
let p1 = dv.page("510_📔Literature_Notes").file.link

let notes2 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="atomic-note");
let n2 = notes2.length
let pb2 = "<progress value='" + n2+ "' max='250'></progress>" + n2
let p2 = dv.page("530_⚛️Atomic_Notes").file.link

let notes3 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="evergreen-note");
let n3 = notes3.length
let pb3 = "<progress value='" + n3+ "' max='250'></progress>" + n3
let p3 = dv.page("550_🌲Evergreen_Notes").file.link

let notes4 = dv.pages('-"900_Supporting_Files"')
	.where(p => p["fileClass"]=="topic");
let n4 = notes4.length
let pb4 = "<progress value='" + n4+ "' max='250'></progress>" + n4
let p4 = dv.page("570_🗩Topics").file.link

const table = dv.markdownTable(["Note Type","Note Number"],[[p1,pb1],[p2,pb2],[p3,pb3],[p4,pb4]],)
dv.paragraph(table)
~~~
## Workshop
### Literature Notes 
More: [[510_📔Literature_Notes|📔Literature Note Dashboard]]
**Captured**
![[510_📔Literature_Notes#^e4cf33]]
**Ready for Next Review**
![[510_📔Literature_Notes#^264851]]

### Evergreen Notes
More: [[550_🌲Evergreen_Notes|🌲Evergreen Note Dashboard]]
**Ready for Next Review**
![[550_🌲Evergreen_Notes#^24c5f0]]

## Final Reviewed Highscore Notes
```ad-note 
title: Click to reveal the content
collapse: closed
### Literature notes
![[510_📔Literature_Notes#^4a1e75]]
### Evergreen notes
![[550_🌲Evergreen_Notes#^8362a3]]

```


