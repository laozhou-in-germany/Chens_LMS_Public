# 500 📝Drafts


## Literature Note - Captured
```dataview
table status-literature-note as Status
from "600 📝Drafts/Clipper"
```

## Literature Note - Bolded
```dataview
table status-literature-note as Status
from "600 📝Drafts/Clipper"
where fileClass = "literature-note" and status-literature-note != "captured"
```

## Non Literature Note
```dataview
table status-evergreen-note as Status
from "600 📝Drafts"
where fileClass != "literature-note"
```

