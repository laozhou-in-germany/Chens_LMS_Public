# Templates
[Back to README](../../README.md)

All templates are stored in the folder "900_Supporting_Files/910_Templates".  
Two different kinds of templates:
- Templates for plugin "Templater"
- Templates for plugin "Periodic Notes" and "Calendar"

Both templates use different command sets. 

The templates for plugin "Templater" are used for generating general notes in folders. It uses `<% %>` to mark the replaceable text. e.g  `<% tp.file.creation_date() %>`
The templates for plugins "Periodic Notes" and "Calendar" use `{{  }}` to mark the replaceable text. e.g.`{{date+7d:gggg-[W]ww}}`And they support also `<% %>`. 

