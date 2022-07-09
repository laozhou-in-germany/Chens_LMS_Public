---
alias:
- 👤Person
- 👤Person Dashboard
tags:
- dashboard
---

# 391_👤Person
##  Family
```dataview
list 
from -"900_Supporting Files"  
where fileClass = "person" and category-person = "family"
```  
##  Relatives
```dataview
list 
from -"900_Supporting Files"  
where fileClass = "person" and category-person = "relative"
```  
##  Friends
```dataview
list 
from -"900_Supporting Files"  
where fileClass = "person" and category-person = "friend"
```   
##  Colleague
```dataview
list 
from -"900_Supporting Files"  
where fileClass = "person" and category-person = "colleague"
```  