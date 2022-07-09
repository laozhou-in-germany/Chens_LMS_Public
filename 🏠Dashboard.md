# 🏠Dashboard
## Overview
~~~col
```dataviewjs
let folder = '"500_Knowledge_Management"'
let ftMd = dv.pages("").file.sort(t => t.cday)[0]
let total = parseInt([new Date() - ftMd.ctime] / (60*60*24*1000))
let allFile = dv.pages(folder).file
let totalMd = "📄 =="+
	allFile.length+"== notes"
let totalTag = "=="+allFile.etags.distinct().length+"== tags"
dv.header(5, "You have spend =="+total+"== days in Obsidian.")
dv.header(6, totalMd)
dv.header(6, "🔖 "+totalTag)
```

```dataviewjs
//progress bar
let dates = moment().format('YYYY-MM-1');
let days = moment().diff(dates, "days");
let num = (days/30 * 10).toFixed(1);
dv.header(6,"This month elapsed "+num*10+'%<br>')
dv.span(percentageToEmotes(num))
//dv.span(percentageToEmotes(num))
function percentageToEmotes(num) {

let str = num.toString().split('.');
let anum= parseInt(str[0]);
let bnum= parseInt(str[1]);
if(!bnum)
	bnum=0;	
if(anum==10)
return "🌑".repeat(anum);
return "🌑".repeat(anum) +get_icon(bnum) + "🌕".repeat(9 - anum);

}

function get_icon(num){
switch( true ) {
    case num <=2   :
		 return "🌕"
        break;
    case num <= 4 :
		return "🌔"
        break;   
    case num <= 6 : 
		return "🌓"
        break;
	 case num <= 8 : 
		return "🌒"
        break;
		default:
		return "🌑"
        break;
		
}
}
```
~~~
---
## Workspace
[[510_📔Literature Notes Workshop|📔Literature Notes Workshop]] 
[[530_🌲Evergreen Notes Workshop|🌲Evergreen Notes Workshop]]
[[540_🗩Topic Workshop|🗩Topic Workshop]]

---
## Quick Navigation
~~~col

**Pilelines**
[[110_🏛Pillars|🏛Pillars]]
[[130_🌟Value_Goals|🌟Value Goals]]
[[150_🎯Outcomes|🎯Outcomes]]
[[170_💎Projects|💎Projects]]
[[171_📽Video_Projects|📽Video Projects]] 
━━━━━━━━━━━━━━━━
[[810 🚰Alignment Zone|🚰Alignment Zone]]
[[818 ✅Task Backlog|✅Task Backlog]]


**Support**
[[111_🔁Routines|🔁Routines]]
[[112_🤯Mindsets|🤯Mindsets]]



**PKM**
[[510_📔Literature_Notes|📔Literature Note]]
[[630 ⚛️Atomic Notes|⚛️Atomic Note]]
[[550_🌲Evergreen_Notes|🌲Evergreen Note]]
[[570_🗩Topics|🗩Topic]]
[[690 🏷Tags|🏷Tags]]
[[601 💡Knowlege Home Node|💡Knowlege Home Node]]
[[410 👤Person|👤Person]]


**Cycles**
[[770 🌏Years|🌏Years]]
[[750 ⌛Quarters|⌛Quarters]]
[[730 📅Months|📅Months]]
[[710 🗓Weeks|🗓Weeks]]
[[830 🌄Journal Notes|🌄Journal Notes]]
━━━━━━━━━━━━━━
[[870 ⭕Cycle Zone|⭕Cycle Zone]]
~~~






