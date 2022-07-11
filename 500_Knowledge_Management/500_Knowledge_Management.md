
# 500_Knowledge_Management

## Overview
~~~dataviewjs
let notes1 = dv.pages()
	.where(p => p["fileClass"]=="literature-note");
let n1 = notes1.length
let pb1 = "<progress value='" + n1+ "' max='250'></progress>" +n1
let p1 = dv.page("510_📔Literature_Notes").file.link

let notes2 = dv.pages()
	.where(p => p["fileClass"]=="atomic-note");
let n2 = notes2.length
let pb2 = "<progress value='" + n2+ "' max='250'></progress>" + n2
let p2 = dv.page("530_⚛️Atomic_Notes").file.link

let notes3 = dv.pages()
	.where(p => p["fileClass"]=="evergreen-note");
let n3 = notes3.length
let pb3 = "<progress value='" + n3+ "' max='250'></progress>" + n3
let p3 = dv.page("550_🌲Evergreen_Notes").file.link

let notes4 = dv.pages()
	.where(p => p["fileClass"]=="topic");
let n4 = notes4.length
let pb4 = "<progress value='" + n4+ "' max='250'></progress>" + n4
let p4 = dv.page("570_🗩Topics").file.link

const table = dv.markdownTable(["Note Type","Note Number"],[[p1,pb1],[p2,pb2],[p3,pb3],[p4,pb4]],)
dv.paragraph(table)
~~~

