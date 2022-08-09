# Create Notes for knowledge management

## Note types

There are 4 note types for knowledge management:

1. Literature note: records of external information  
2. Atomic note: a small piece of reusable external information  
3. Evergreen note: a single idea of me (insight, opinion...)
4. Topic note: a consolidated collection of notes about the same topic

The 4 note types are linked with each other. In short, the connections are the following: 

- **Literature notes** are records of external information. 
- **Atomic notes** are extracted from **literature notes**.
- **Evergreen notes** are generated from **literature notes**.
- **Topic notes** are consolidated results of the three note types above and sub-topic notes.



## Create a literature note
**Step 1:** Create a new literature note by pressing shortcut **Alt + n** and selecting "**New-Literature-Note**"  
For alternative ways see [5 Ways to create new notes](QS_a1_5_ways_to_create_new_notes.md)   
**Step 2:** Rename the note [^1]  
**Step 3:** Write the note below the level 1 header  
**Step 4:** Update the yalm frontmatter  
**Step 5:** Add tags to the note  
**Step 6:** Move the note to the folder "510_📔Literature_Notes"  
**Done:** Both features **spaced repetition**[^2] and **context-aware resurfacing** [^3] are now enabled for this note.   

## Extract an atomic note from the literature note

**Step 1:** Use "**[[title]]**" to create a wiki link to the new atomic note within the literature note  
**Step 2:** Create an empty note by clicking on the wiki link and renaming the note  
**Step 3:** Insert the template by pressing shortcut  **Alt + t** and selecting "**New-Atomic-Note**"
For alternative ways see [5 Ways to create new notes](QS_a1_5_ways_to_create_new_notes.md)   
**Step 4:** Write the note below the level 1 header
**Step 5:** Update the yalm frontmatter 
**Step 6:** Add tags to the note  
**Step 7:** Move the note to the folder "530_⚛️Atomic_Notes"  
**Done:** The feature **context-aware resurfacing** [^3] is now enabled for this note.


## Generate an evergreen note from the literature note
Steps similar to extracting an atomic note from the literature note
**Done:** Both features **spaced repetition**[^2] and **context-aware resurfacing** [^3] are now enabled for this note.   

## Create a topic note

**Step 1:** Create a new topic note by pressing shortcut **Alt + n** and selecting "**New-Topic**"  
For alternative ways see [5 Ways to create new notes](QS_a1_5_ways_to_create_new_notes.md)   
**Step 2:** Rename the note [^1]  
**Step 3:** Write the note below the level 1 header  
**Step 4:** Update the yalm frontmatter  
**Step 5(Optional):** Add a value goal after  "**Value-Goal::**"  
**Step 6:** Add one tag after "**Related-Tag::**"  
**Step 7:** Move the note to the folder "570_🗩Topics"  
**Done:** Both features **context-aware resurfacing** [^3] and **Consolidation helper**[^4] are enabled for this note.   



[^1]: After the renaming of the note, an error message is shown for all dataview code blocks. "Evaluation Error: ..." It doesn't impact the function. By the next reload of the note, all dataview code blocks should work.   

[^2]: **Spaced repetition:** The note will be shown automatically on the dashboards "510_📔Literature_Notes" or "550_🌲Evergreen_Notes" and "500_Knowledge_Management" after a certain period for the next review, depending on the **score**, **reviewed** and **last-review** in the front matter.  

[^3]: **Context-aware resurfacing:** The note will be resurfaced automatically while editing literature notes, evergreen notes, or topic notes with the same tag. 

[^4]: **Consolidation helper:** All notes with the **related tag** are listed below **unprocessed**. The notes will disappear, as soon as they are referenced within the topic (using outlink).