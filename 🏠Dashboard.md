---
banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
banner_icon: 🏠
banner_y: 0.828
---
# 🏠Dashboard
## Overview
~~~col
```dataviewjs
//统计笔记 nofold 里面放入需要排除的文件夹
let folder = '"600 💡Knowledge"'
let ftMd = dv.pages("").file.sort(t => t.cday)[0]
let total = parseInt([new Date() - ftMd.ctime] / (60*60*24*1000))
let allFile = dv.pages(folder).file
let totalMd = "📄 =="+
	allFile.length+"== 篇不知所云的文档"
let totalTag = "=="+allFile.etags.distinct().length+"== 个乱七八糟的标签"
let totalTask = "=="+allFile.tasks.length+"== 个已荒废的事项"
dv.header(5, "您已在Ob上浪费了 =="+total+"== 天")
dv.header(6, totalMd)
dv.header(6, "🔖 "+totalTag)
```

```dataviewjs
//个性化进度条算法
let dates = moment().format('YYYY-MM-1');
let days = moment().diff(dates, "days");
let num = (days/30 * 10).toFixed(1);
dv.header(6,"⚽光阴似箭，本月已走完"+num*10+'%<br>')
dv.span(percentageToEmotes(num))
//dv.span(percentageToEmotes(num))
function percentageToEmotes(num) {
  //小数点分割
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
[[861 📔Literature Notes Workshop|📔Literature Notes Workshop]] 
[[865 🌲Evergreen Notes Workshop|🌲Evergreen Notes Workshop]]
[[867 🗩Topic Workshop|🗩Topic Workshop]]

---
## Quick Navigation
~~~col

**Pilelines**
[[110 🏛Pillars|🏛Pillars]]
[[130 🌟Value Goals|🌟Value Goals]]
[[150 🎯Outcomes|🎯Outcomes]]
[[170 💎Projects|💎Projects]]
[[171 📽Video Projects|📽Video Projects]] 
━━━━━━━━━━━━━━━━
[[810 🚰Alignment Zone|🚰Alignment Zone]]
[[818 ✅Task Backlog|✅Task Backlog]]


**Support**
[[111 🔁Routines|🔁Routines]]
[[112 🤯Mindsets|🤯Mindsets]]



**PKM**
[[610 📔Literature Notes|📔Literature Note]]
[[630 ⚛️Atomic Notes|⚛️Atomic Note]]
[[650 🌲Evergreen Notes|🌲Evergreen Note]]
[[670 🗩Topics|🗩Topic]]
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






