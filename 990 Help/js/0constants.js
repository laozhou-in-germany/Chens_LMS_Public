class Constants {
    constructor() {
        // Action
        this.action = {};
        // Action Status
        this.action.status = {
            active: "🟢 Active",
            breakdown: "➗ Breakdown",
            delegate: "🎁 Delegate",
            nextUp: "🔜 Next Up",
            done: "☑️ Done",
            removed: "✖️ Removed",
        };
        this.action.status.orderedMap = new Map();
        this.action.status.orderedMap.set(this.action.status.active, 0);
        this.action.status.orderedMap.set(this.action.status.breakdown, 1);
        this.action.status.orderedMap.set(this.action.status.delegate, 2);
        this.action.status.orderedMap.set(this.action.status.nextUp, 3);
        this.action.status.orderedMap.set(this.action.status.done, 4);
        this.action.status.orderedMap.set(this.action.status.removed, 5);
        // Action Priority
        this.action.priority = {
            immediate: "🟧 👀",
            quick: "⬜️ 💨",
            scheduled: "🟪 ⌚️",
            one: "🟥 1st",
            two: "🟩 2nd",
            three: "🟦 3rd",
            four: "🟧 4th",
        };
        this.action.priority.orderedMap = new Map();
        this.action.priority.orderedMap.set(this.action.priority.immediate, 0);
        this.action.priority.orderedMap.set(this.action.priority.quick, 1);
        this.action.priority.orderedMap.set(this.action.priority.scheduled, 2);
        this.action.priority.orderedMap.set(this.action.priority.one, 3);
        this.action.priority.orderedMap.set(this.action.priority.two, 4);
        this.action.priority.orderedMap.set(this.action.priority.three, 5);
        this.action.priority.orderedMap.set(this.action.priority.four, 6);

        // Project
        this.project = {};
        // Project Status
        this.project.status = {
            active: "🟢 Active",
            nextUp: "🔜 Next Up",
            onHold: "⏸ On Hold",
            future: "✨ Future",
            completed: "☑️Completed",
            abandon: "🗑️ Abandon"
        };
        this.project.status.orderedMap = new Map();
        this.project.status.orderedMap.set(this.project.status.active, 0);
        this.project.status.orderedMap.set(this.project.status.nextUp, 1);
        this.project.status.orderedMap.set(this.project.status.onHold, 2);
        this.project.status.orderedMap.set(this.project.status.future, 3);
        this.project.status.orderedMap.set(this.project.status.completed, 4);
        this.project.status.orderedMap.set(this.project.status.abandon, 5);

        // Outcome
        this.outcome = {};
        // Outcome Status
        this.outcome.status = {
            underway: "🟢 Underway",
            notStarted: "✨ Not Started",
            completed: "☑️ Completed",
        };
        this.outcome.status.orderedMap = new Map();
        this.outcome.status.orderedMap.set(this.outcome.status.underway, 0);
        this.outcome.status.orderedMap.set(this.outcome.status.notStarted, 1);
        this.outcome.status.orderedMap.set(this.outcome.status.completed, 2);

        // Objective
        this.objective = {};
        // Outcome Status
        this.objective.status = {
            offTrack: "🚨 Off Track",
            underway: "🟢 Underway",
            paused: "⏸ Paused",
            waiting: "✨ Waiting",
            completed: "☑️ Completed",
        };
        this.objective.status.orderedMap = new Map();
        this.objective.status.orderedMap.set(this.objective.status.offTrack, 0);
        this.objective.status.orderedMap.set(this.objective.status.underway, 1);
        this.objective.status.orderedMap.set(this.objective.status.paused, 2);
        this.objective.status.orderedMap.set(this.objective.status.waiting, 3);
        this.objective.status.orderedMap.set(this.objective.status.completed, 4);

	     // Status literature note
        this.noteLiterature = {};
        // Outcome Status
        this.noteLiterature.status = {
            captured: "Captured",
            bolded: "Bolded",
            highlighted: "Highlighted",
            summarized: "Summarized",
            forgotten: "Forgotten",
        };
        this.noteLiterature.status.orderedMap = new Map();
        this.noteLiterature.status.orderedMap.set(this.noteLiterature.status.captured, 0);
        this.noteLiterature.status.orderedMap.set(this.noteLiterature.status.bolded, 1);
        this.noteLiterature.status.orderedMap.set(this.noteLiterature.status.highlighted, 2);
        this.noteLiterature.status.orderedMap.set(this.noteLiterature.status.summarized, 3);
        this.noteLiterature.status.orderedMap.set(this.noteLiterature.status.forgotten, 4);

         // Status evergreen note & moc
        this.noteEvergreen = {};
        // Outcome Status
        this.noteEvergreen.status = {
            captured: "Captured",
            bolded: "Bolded",
            highlighted: "Highlighted",
            summarized: "Summarized",
            forgotten: "Forgotten",
        };
        this.noteEvergreen.status.orderedMap = new Map();
        this.noteEvergreen.status.orderedMap.set(this.noteEvergreen.status.captured, 0);
        this.noteEvergreen.status.orderedMap.set(this.noteEvergreen.status.bolded, 1);
        this.noteEvergreen.status.orderedMap.set(this.noteEvergreen.status.highlighted, 2);
        this.noteEvergreen.status.orderedMap.set(this.noteEvergreen.status.summarized, 3);
        this.noteEvergreen.status.orderedMap.set(this.noteEvergreen.status.forgotten, 4);

    }
}