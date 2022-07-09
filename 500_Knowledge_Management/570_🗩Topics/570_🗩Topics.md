---
alias:
- 🗩Topic
- 🗩Topic Dashboard
tags:
- dashboard
---
# 570_🗩Topics

```dataview
table  length(rows) as Number
from #moc 
group by topic
```

## Top-Down: Topics to research
### Guiding questions  
> What kind of literature should I research to get more knowledge for this moc
### Definition of Done
Sufficient knowledge is learned, so that I know how to start to archieve the value goal or has a comprehensive overview about the MOC.
- [ ] Literature (book, course, training) to learn defined
- [ ] Literature notes made
- [ ] Evergreen note made
- [ ] Check, if the purpose fulfilled. If not, start from step 1 again
- [ ] Set MOC property "to-research" to no
### Top-Down: Predefined
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["to-research"]=="y" && p["fileClass"]=="topic");
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~

## Bottom-Up: Topics to consolidate
### Guiding questions  
> What kind of insight can I consolidate the knowledge from all related notes?
### Definition of Done
A evergreen note is created, which considering the related notes. 
- [ ] A evergreen note is created
- [ ] Update the moc property "notes-to-consolidate" and "notes-last-consolidation"
### Bottom-Up: Automatic assembling
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["fileClass"]=="topic" && p["Related-Tag"]!="#dummytopic" && dv.pages( p["Related-Tag"]).length > p["notes-to-consolidate"]) ;
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages(p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~



## Recent moc
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p.file.mtime, "desc")
	.where(p => p["fileClass"]=="topic")
	.limit(10);
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~

##  All notes - Status
### Seeded
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["fileClass"]=="topic" && p["status-topic"]=="seeded");
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~

### Assembling 
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["fileClass"]=="topic" && p["status-topic"]=="assembling");
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~

### Colliding 
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["fileClass"]=="topic" && p["status-topic"]=="colliding");
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~

### Unified 
~~~dataviewjs
let topics = dv.pages()
	.sort(p => p["Pillar"])
	.where(p => p["fileClass"]=="topic" && p["status-topic"]=="unifed");
dv.table(
    ["Topic","Pillar","Value-Goal", "Progress", "Evergreen"],
    topics.map(p =>[
        p.file.link,
        p["Pillar"],
        p["Value-Goal"],
        "![pb|100](https://progress-bar.dev/"  
	        + dv.pages('#atomic-note or #literature-note or #evergreen-note  or #meeting-minutes or #day and ' + p["Related-Tag"]).length
	        +"/?scale="
	        + p["notes-to-consolidate"] 
	        + "&suffix=)",  
        dv.pages('#evergreen-note and ' + p["Related-Tag"]).file.link, //page with tag #evergreen-note and Related-Tag
    ]
    )
);
~~~


 ## Topics without pillar
 
 ~~~dataview
 table Pillar
 from #moc 
 where !Pillar
 ~~~
 