---
alias:
- 🏷Tags 
- 🏷Tags Dashboard
tags:
- dashboard
---

# 590_🏷Tags
```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: WordCloud

#-----------------#
#- chart data    -#
#-----------------#
data: |
  dataviewjs:
  return dv.pages()
           .flatMap(p => p.file.etags)
           .groupBy(p => p)
           .map(p => ({tag: p.key, count: p.rows.length}))
           .array();

#-----------------#
#- chart options -#
#-----------------#
options:
  wordField: "tag"
  weightField: "count"
  colorField: "count"
  wordStyle:
    fontFamily: "Verdana"
    fontSize: [24, 80]
  enableSearchInteraction:
    operator: tag
```


## Hot tags
~~~dataviewjs
let tags = dv.pages().file.etags
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
let tags = dv.pages().file.etags
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
let tags = dv.pages().file.etags
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