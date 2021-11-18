(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__95DgK",item:"ContactList_item__3frcE",buttonDelete:"ContactList_buttonDelete__3VsQO"}},16:function(t,e,n){t.exports={container:"Container_container__R8mYZ"}},17:function(t,e,n){t.exports={input:"Filter_input__1vixs"}},33:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=n(2),u=n(4),l=(n(30),n(3)),d=n(19),b=n(5),j=n.n(b),p=n(10),f="https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts",h=Object(u.b)("contacts/fetchContacts",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var c,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,n.dispatch,t.prev=1,t.next=4,fetch(f);case 4:if((a=t.sent).ok){t.next=7;break}throw new Error("error server!");case 7:return t.next=9,a.json();case 9:return r=t.sent,t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(u.b)("contacts/remove",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var c,a,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,a=n.dispatch,t.prev=1,t.next=4,fetch("".concat(f,"/").concat(e),{method:"DELETE"});case 4:if(r=t.sent,console.log(" delete",r),r.ok){t.next=8;break}throw new Error("Can't delete contact!Error Server!");case 8:return a(y(e)),t.next=11,r.json();case 11:return o=t.sent,console.log("delete data",o),t.abrupt("return",e);case 16:return t.prev=16,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 19:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(u.b)("contacts/addcontact",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var c,a,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,a=n.dispatch,t.prev=1,t.next=4,fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Can't add contact! Error Server!");case 7:return t.next=9,r.json();case 9:return o=t.sent,a(_(o)),t.abrupt("return",o);case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}()),x=function(t,e){t.status="rejected",t.error=e.payload},v=function(t){t.error=null},C=Object(u.c)({name:"contacts",initialState:{contacts:[],filter:"",status:null,error:null},reducers:{addContactNew:function(t,e){console.log("reduser action.payload",e.payload),console.log("reduser addContact  state.contacts",t.contacts),t.contacts=[e.payload].concat(Object(d.a)(t.contacts)),console.log("reduser addContact  state.contacts",t.contacts)},deleteContact:function(t,e){t.contacts=t.contacts.filter((function(t){return t.id!==e.payload})),console.log("reduser a deleteContac state.contacts",t.contacts)},changeFilter:function(t,e){t.filter=e.payload}},extraReducers:(c={},Object(l.a)(c,h.pending,v),Object(l.a)(c,h.fulfilled,(function(t,e){t.status="resolved",t.contacts=e.payload,console.log("super fetchContacts state.contacts - 1 ",t.contacts)})),Object(l.a)(c,h.rejected,x),Object(l.a)(c,m.pending,v),Object(l.a)(c,m.fulfilled,(function(t,e){t.status="resolved",console.log("super action.payload",e.payload),console.log("super state.contacts-add",t.contacts),t.error=null})),Object(l.a)(c,m.rejected,x),Object(l.a)(c,O.pending,v),Object(l.a)(c,O.fulfilled,(function(t){t.status="resolved",t.error=null})),Object(l.a)(c,O.rejected,x),c)}),g=C.actions,_=g.addContactNew,y=g.deleteContact,w=g.changeFilter,k=C.reducer,N=Object(u.a)({reducer:{contacts:k}}),A=(n(33),n(16)),F=n.n(A),E=n(1);var z=function(t){var e=t.title,n=t.children;return Object(E.jsxs)("div",{className:F.a.container,children:[Object(E.jsxs)("h2",{children:[" ",e]}),n]})},S=n(14),L=n(6),Z=n.n(L);var B=function(){var t=Object(a.useState)(""),e=Object(S.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(S.a)(r,2),s=o[0],u=o[1],l=Object(i.c)((function(t){return t.contacts.contacts})),d=Object(i.b)();function b(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"phone":u(a);break;default:return}}var j=function(){c(""),u("")};return Object(E.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:n,phone:s};if(l&&l.some((function(t){return t.name.includes(n)})))return alert("".concat(n," is already in contacts!")),void j();d(m(e)),j()},className:Z.a.contactForm,children:[Object(E.jsxs)("label",{className:Z.a.label,children:["Name:",Object(E.jsx)("input",{className:Z.a.input,type:"text",name:"name",autoComplete:"off",value:n,onChange:b,placeholder:"Tom Smit",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(E.jsxs)("label",{className:Z.a.label,children:["Phone:",Object(E.jsx)("input",{className:Z.a.input,type:"tel",name:"phone",autoComplete:"off",value:s,onChange:b,placeholder:"050-50-50",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(E.jsx)("input",{className:Z.a.submitButton,type:"submit",value:"Add contact"})]})},D=n(17),J=n.n(D),T=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.contacts.filter}));return Object(E.jsxs)("label",{children:["Find contact by name",Object(E.jsx)("input",{className:J.a.input,type:"text",name:"filter",autoComplete:"off",value:e,onChange:function(e){return t(w(e.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},M=function(t){return t.contacts.contacts},P=function(t){return t.contacts.filter},V=n(11),q=n.n(V),R=n(18);var W=function(){var t=Object(i.c)((function(t){return t.contacts})),e=t.status,n=t.error,c=Object(i.b)(),r=Object(i.c)(M),o=Object(i.c)(P);Object(a.useEffect)((function(){c(h())}),[]);var s=o.toLowerCase(),u=r.filter((function(t){return t.name.toLowerCase().includes(s)}));return console.log("list contacts",u),Object(E.jsxs)("div",{children:["loading"===e&&Object(E.jsx)("h2",{children:"Loading"}),"rejected"===e&&Object(E.jsxs)("h2",{children:["Ups..",n]}),Object(E.jsx)("ul",{className:q.a.list,children:r.length>0&&u.map((function(t){return Object(E.jsxs)("li",{className:q.a.item,children:[Object(E.jsxs)("p",{children:[Object(E.jsxs)("span",{children:[t.name,":"]})," ",Object(E.jsx)("span",{children:t.phone})]}),Object(E.jsx)("button",{className:q.a.buttonDelete,type:"button",onClick:function(){return c(O(t.id))},children:Object(E.jsx)(R.a,{color:"red",size:"18px"})})]},t.id)}))})]})};var K=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("h1",{children:"Phonebook"}),Object(E.jsx)(z,{children:Object(E.jsx)(B,{})}),Object(E.jsxs)(z,{title:"Contacts",children:[Object(E.jsx)(T,{}),Object(E.jsx)(W,{})]})]})};n(35),n(36);s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(i.a,{store:N,children:Object(E.jsx)(K,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2ozP3",label:"ContactForm_label__1vRCe",input:"ContactForm_input__1o0JM",submitButton:"ContactForm_submitButton__NjFKd"}}},[[37,1,2]]]);
//# sourceMappingURL=main.8e5c12c4.chunk.js.map