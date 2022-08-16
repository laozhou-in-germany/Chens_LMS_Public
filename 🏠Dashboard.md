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

## Quick Navigation
~~~col

**[[100_Goal_Management|Goal Management]]**
[[110_🏛Pillars|🏛Pillars]]
[[111_🔁Routines|🔁Routines]]
[[112_🤯Mindsets|🤯Mindsets]]
[[130_🌟Value_Goals|🌟Value Goals]]
[[150_🎯Outcomes|🎯Outcomes]]
[[170_💎Projects|💎Projects]]
[[171_📽Video_Projects|📽Video Projects]] 
[[109_Task_Backlog|✅Task Backlog]]


**[[300_Journal|Journal]]**
[[310_🌄Daily|🌄Daily Notes]]
[[320_🎉Events|🎉Events]]
[[340_🖥️Meetings|🖥Meetings]]
[[391_👤Person|👤Person]]

**[[500_Knowledge_Management|Knowledge]]**
[[501_💡Home_Node|💡Home Node]]
[[570_🗩Topics|🗩Topics]]
[[550_🌲Evergreen_Notes|🌲Evergreen Notes]]
[[530_⚛Atomic_Notes|⚛️Atomic Notes]]
[[510_📔Literature_Notes|📔Literature Notes]]


**[[700_Periodic_Review|Periodic Review]]**
[[770_🌏Years|🌏Years]]
[[750_⌛Quarters|⌛Quarters]]
[[730_📅Months|📅Months]]
[[710_❇Weeks|❇Weeks]]
[[310_🌄Daily|🌄Journal Notes]]

~~~
