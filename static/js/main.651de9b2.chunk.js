(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={label:"Filter_label__15vG3"}},27:function(t,e,n){},43:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),s=(n(27),n(17)),i=n(8),l=n.n(i),b=n(6),u=n.n(b),j=n(3),d=n(4),m=Object(d.b)("contacts/add",(function(t,e){return{payload:{id:l.a.generate(),name:t,number:e}}})),O=Object(d.b)("contacts/changeFilter"),f={addContact:m,deleteContact:Object(d.b)("contacts/delete"),changeFilter:O},h=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},x=function(t){var e=h(t),n=p(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)},_=n(1);function v(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],b=o[1],d=l.a.generate(),m=l.a.generate(),O=Object(j.b)(),p=Object(j.c)(h),x=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":b(a);break;default:return}},v=function(){c(""),b("")};return Object(_.jsxs)("form",{className:u.a.form,onSubmit:function(t){if(t.preventDefault(),""!==n)if(""!==i){if(p.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void v();O(f.addContact(n,i)),v()}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.")},children:[Object(_.jsxs)("label",{className:u.a.label,htmlFor:d,children:["Name",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"name",value:n,onChange:x,id:d})]}),Object(_.jsxs)("label",{className:u.a.label,htmlFor:m,children:["Number",Object(_.jsx)("input",{className:u.a.input,type:"text",name:"number",value:i,onChange:x,id:m})]}),Object(_.jsx)("button",{className:u.a.btn,type:"submit",children:"Add contact"})]})}var C=n(9),g=n.n(C);function N(){var t=Object(j.c)(x),e=Object(j.b)();return Object(_.jsx)("ul",{children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:g.a.item,children:[Object(_.jsxs)("span",{className:g.a.span,children:[a,": "]}),Object(_.jsx)("span",{className:g.a.span,children:c}),Object(_.jsx)("button",{onClick:function(){return function(t){return e(f.deleteContact(t))}(n)},className:g.a.btn,children:"DELETE!!!!!"})]},n)}))})}var y=n(19),F=n.n(y);function k(){var t=Object(j.c)(p),e=Object(j.b)();return Object(_.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(_.jsx)("input",{type:"text",value:t,onChange:function(t){return e(f.changeFilter(t.target.value))}})]})}n(43);function w(){return Object(_.jsxs)("div",{className:"block",children:[Object(_.jsx)("h2",{children:"Phonebook"}),Object(_.jsx)(v,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(k,{}),Object(_.jsx)(N,{})]})}var L,E=n(20),S=n(13),A=n(5),B=n(21),D=n.n(B),T=n(22),z=n.n(T),G=n(14),J=n(2),P=Object(d.c)([],(L={},Object(G.a)(L,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(S.a)(t),[n])})),Object(G.a)(L,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),I=Object(d.c)("",Object(G.a)({},f.changeFilter,(function(t,e){return e.payload}))),M=Object(J.b)({items:P,filter:I}),Q=[].concat(Object(S.a)(Object(d.d)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),[z.a]),U={key:"contacts",storage:D.a,blacklist:["filter"]},W=Object(d.a)({reducer:{contacts:Object(A.g)(U,M)},middleware:Q,devTools:!1}),q=Object(A.h)(W);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(j.a,{store:W,children:Object(_.jsx)(E.a,{loading:null,persistor:q,children:Object(_.jsx)(w,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__11pP7",label:"ContactForm_label__2WUys",input:"ContactForm_input__2cGA8",btn:"ContactForm_btn__EpzjD"}},9:function(t,e,n){t.exports={btn:"ContactList_btn__3lpmB",item:"ContactList_item__1FQeB",span:"ContactList_span__3bmn-"}}},[[47,1,2]]]);
//# sourceMappingURL=main.651de9b2.chunk.js.map