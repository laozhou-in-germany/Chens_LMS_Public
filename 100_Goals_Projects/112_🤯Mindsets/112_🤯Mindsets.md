---
alias:
- 🤯Mindsets Dashboard
- 🤯Mindsets
- Mindsets
tags:
- dashboard
---
# 112_🤯Mindsets
## Overview
```button
name 🤯 New Mindset
type note(100_Goals_Projects/112_🤯Mindsets/New Mindset, split) template
action New-Mindset
```

```dataview
TABLE WITHOUT ID
    file.link as "Mindset",
    mindset-status as "Status",
    Why as "Why",
    Pillar,
    Value-Goal as "🌟Value Goal"
from -"900_Supporting_Files"
where fileClass = "mindset" 
SORT Value-Goal desc
```

