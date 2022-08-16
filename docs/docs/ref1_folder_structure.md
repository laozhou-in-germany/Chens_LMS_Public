# Folder Structure, Note Types and Symbols

## Folder structure 
This vault has the following folder structure:

###### **000_Drafts**: All fleeting notes and captured notes  
###### **100_Goal_Management**: All notes for goal management  
  - 110_🏛Pillars  
  - 111_🔁Routines  
  - 112_🤯Mindsets  
  - 130_🌟Value_Goals  
  - 150_🎯Outcomes  
  - 170_💎Projects  
  - 171_📽Video_Projects  
###### **300_Journal**: All notes for the journal  
  - 310_🌄Daily
  - 320_🎉Events
  - 340_🖥️Meetings
  - 391_👤Person
###### **500_Knowledge_Management**:  All notes for the knowledge management
  - 510_📔Literature_Notes
  - 530_⚛️Atomic_Notes
  - 550_🌲Evergreen_Notes
  - 570_🗩Topics
###### **700_Periodic_Review**: All notes for the periodic review
  - 710_❇Weeks  
  - 730_📅Months  
  - 750_⌛Quarters  
  - 770_🌏Years  
###### **900_Supporting_Files**: All supporting files for this vault

## Note types
The folder structure is based on the note types. Each folder stores notes of one note type.

The yalm front matter is used to document the note type. 

~~~
---
fileClass: literature-note  
---
~~~

The property name `fileClass` is chosen for better compatibility with the plugin [Supercharged links](https://github.com/mdelobelle/obsidian_supercharged_links). 

This vault provides a lot of dashboards and features for automation. They are supported by the plugin [Dataview](https://github.com/blacksmithgu/obsidian-dataview) by querying the note type and other meta information.  Here is an example of the query result. 

![image-20220803212723887](images/image-20220803212723887.png)

## Symbols

Each note type is represented by a symbol. For the definition of the symbol see the folder structure.  Additionally, the scores are also represented with symbols:

- ◷: x
- ◔: xx
- ◑: xxx
- ◕: xxxx
- ●: xxxxx

The symbols are automatically displayed before or after the note title. They are visible in the reading mode, or in the dataview query result (Live Preview mode). This feature is supported by the plugin [Supercharged links](https://github.com/mdelobelle/obsidian_supercharged_links). 
