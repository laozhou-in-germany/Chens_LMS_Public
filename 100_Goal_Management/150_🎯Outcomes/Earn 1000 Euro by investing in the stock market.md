---
fileClass: outcome  
status: 🟢active
date: 2022-08-12  
total: 7
completed: 2
---

# Earn 1000 Euro by investing in the stock market
More: [[150_🎯Outcomes]]

Value Goal:: [Create passive income to be financial indenpendent](100_Goal_Management/130_🌟Value_Goals/Create%20passive%20income%20to%20be%20financial%20indenpendent.md)  
Quarters:: [[2022-Q3]]  

## What? (Mile Stones)
- [x] 100 €
- [x] 200 €
- [ ] 300 €
- [ ] 400 €
- [ ] 500 €
- [ ] 750 €
- [ ] 1000 €
## How?
> Press `Ctrl + Q`  to add **💎Project** or **📽Video Project** for this outcome  
```dataviewjs
let projects = this.current().file.inlinks
	.map(l => dv.page(l))
    .where(p => p["fileClass"] == "project" || p["fileClass"] == ("video-project"));
dv.table(
    ["Project",  "Months", "Progress","Status"],
    projects.map(p => [
        p.file.link,
        p["months"],
        "![pb|100](https://progress-bar.dev/"  + Math.round(p["completed"]/p["total"]*100) + "/)",
        p["status"],
    ])
);
```