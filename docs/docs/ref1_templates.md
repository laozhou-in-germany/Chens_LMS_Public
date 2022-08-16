# Templates

All templates are stored in the folder "900_Supporting_Files/910_Templates".  
Two different kinds of templates have been used in the vault:

- Templates for plugin "Templater"
- Templates for plugin "Periodic Notes" and "Calendar"

## Templates for "Templater"

They are used for generating notes for goal management, journals (with the exception of daily notes), and knowledge management.  
Supported format:  e.g  `<% tp.file.creation_date() %>`

## Templates for  "Periodic Notes" and "Calendar"
They are used for generating daily notes and periodic reviews and stored in the subfolder "Periodic_Note"
Supported format:  e.g  ` {{date+7d:gggg-[W]ww}}` and `<% tp.file.creation_date() %>`. 
