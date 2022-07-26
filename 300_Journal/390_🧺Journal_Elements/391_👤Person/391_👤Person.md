---
alias: ["👤Person","👤Person Dashboard"]
---

# 391_👤Person

```button
name 👤New Person
type note(300_Journal/390_🧺Journal_Elements/391_👤Person/New Person, split) template
action New-Person-Colleague
```
##  Family
```dataview
list 
from -"900_Supporting_Files"  
where fileClass = "person" and category-person = "family"
```  
##  Relatives
```dataview
list 
from -"900_Supporting_Files"  
where fileClass = "person" and category-person = "relative"
```  
##  Friends
```dataview
list 
from -"900_Supporting_Files"  
where fileClass = "person" and category-person = "friend"
```   
##  Colleague
```dataview
list 
from -"900_Supporting_Files"  
where fileClass = "person" and category-person = "colleague"
```  