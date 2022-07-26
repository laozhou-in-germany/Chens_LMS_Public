---
alias:
- 🏷Tags 
- 🏷Tags Dashboard
tags:
- dashboard
---

# 590_🏷Tags

## Hot tags
~~~dataviewjs
let tags = dv.pages('-"900_Supporting_Files"').file.etags
	.distinct()
		.where(t => dv.pages(t).length>10)
		.sort(t => dv.pages(t).length, "desc");
let tags_no_fileClassTag = tags
	.where(t => t!="#dashboard" && t!="#dummytopic" && t!="#task")     
dv.table(
    ["Tag","Occurance"],
    tags_no_fileClassTag.map(t =>[
        t,
        dv.pages(t).length,
        
    ]
    )
);
~~~

## Middle tags
~~~dataviewjs
let tags = dv.pages('-"900_Supporting_Files"').file.etags
	.distinct()
		.where(t => dv.pages(t).length<=10 && dv.pages(t).length>5)
		.sort(t => dv.pages(t).length, "desc");
let tags_no_fileClassTag = tags
	.where(t => t!="#dashboard" && t!="#dummytopic" && t!="#task")     
dv.table(
    ["Tag","Occurance"],
    tags_no_fileClassTag.map(t =>[
        t,
        dv.pages(t).length,
    ]
    )
);
~~~

## Cold tags
~~~dataviewjs
let tags = dv.pages('-"900_Supporting_Files"').file.etags
	.distinct()
		.where(t => dv.pages(t).length<=5 )
		.sort(t => dv.pages(t).length, "desc");
let tags_no_fileClassTag = tags
	.where(t => t!="#dashboard" && t!="#dummytopic" && t!="#task")     
dv.table(
    ["Tag","Occurance"],
    tags_no_fileClassTag.map(t =>[
        t,
        dv.pages(t).length,
    ]
    )
);
~~~