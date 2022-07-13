# Templates
All templates are stored in the folder "900_Supporting_Files/910_Templates".  
Two different kinds of templates:
- Templates for plugin "Templater"

- Templates for plugin "Periodic Notes" and "Calender"

  

- The both templates use different command set. 

## Templates for plugin "Templater"
Purpose: Use for generating general notes in folders.

Supported format: 
Templater:
- e.g  `<% tp.file.creation_date() %>`

## Templates for plugin "Periodic Notes" and "Calender"
Purpose: Use for generating daily journal and periodic reviews

Supported format: 
Daily Notes, Periodical Notes and Templates
 - e.g.` {{date+7d:gggg-[W]ww}}`

Templater:
- e.g  `<% tp.file.creation_date() %>`

