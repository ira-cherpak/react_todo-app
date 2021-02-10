(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),o=a.n(c),r=(a(14),a(15),a(16),a(2)),i=a(8),u=a(1),s=a(3),m=a.n(s),d=function(e){var t=e.todo,a=e.onStatusChange,c=e.deleteTodo,o=e.updateTitle,r=Object(n.useState)(!1),i=Object(u.a)(r,2),s=i[0],d=i[1],f=Object(n.useState)(t.title),p=Object(u.a)(f,2),g=p[0],E=p[1];return l.a.createElement("li",{className:m()({completed:t.completed},{editing:s}),onDoubleClick:function(){return d(t.id)}},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return a(t.id)},checked:t.completed}),l.a.createElement("label",null,t.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return c(t.id)}})),l.a.createElement("input",{type:"text",className:"edit",value:g,onChange:function(e){return E(e.target.value.trim())},onKeyUp:function(e){switch(e.key){case"Enter":g.length>0?(o(t.id,g),E(t.title)):c(t.id),d(!1);break;case"Escape":E(t.title),o(t.id,t.title),d(!1)}},onBlur:function(e){return a=e.target.value,n=t.id,o(a,n),void d(!1);var a,n}}))},f=function(e){var t=e.todos,a=e.onStatusChange,n=e.deleteTodo,c=e.updateTitle;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(d,{key:e.id,todo:e,onStatusChange:a,deleteTodo:n,updateTitle:c})})))},p={All:"All",Active:"Active",Completed:"Completed"},g=function(e){var t=e.selectedFilter,a=e.setSelectedFilter,n=function(e){e.preventDefault(),a(e.target.name)};return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:m()({selected:t===p.All}),name:"All",onClick:n},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:m()({selected:t===p.Active}),name:"Active",onClick:n},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:m()({selected:t===p.Completed}),name:"Completed",onClick:n},"Completed")))};var E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],d=s[1],E=Object(n.useState)("All"),b=Object(u.a)(E,2),h=b[0],v=b[1];Object(n.useEffect)((function(){localStorage.todos?c(JSON.parse(localStorage.getItem("todos"))):localStorage.setItem("todos",JSON.stringify([]))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);var O=a.filter((function(e){return!e.completed})),C=a.filter((function(e){return e.completed})),N=function(e){switch(e){case p.Active:return O;case p.Completed:return C;default:return a}}(p[h]);return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){if(m.trim().length>0){var e={id:+new Date,title:m,completed:!1};c([].concat(Object(i.a)(a),[e]))}d("")}()}},l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:m,onChange:function(e){d(e.target.value)}}))),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(e){var t=e.target.checked;c((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:t})}))}))},checked:0===O.length}),l.a.createElement("label",null,"Mark all as complete"),l.a.createElement(f,{todos:N,onStatusChange:function(e){c((function(t){return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodo:function(e){c(a.filter((function(t){return t.id!==e})))},updateTitle:function(e,t){c(a.map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},a),{},{title:t}):n})))}})),a.length>0&&l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},O.length," ","items left"),l.a.createElement(g,{setSelectedFilter:v,selectedFilter:h}),C.length>0&&l.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){c(O)}},"Clear completed")))};o.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6a6f4b41.chunk.js.map