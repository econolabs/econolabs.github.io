(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/2Ve":function(e,t,n){},"1+KQ":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),l=n.n(a),r=n("jFIn"),c=n("/MKj"),i=n("Bl7J"),o=n("VU5L"),u=n("Qu+8"),s=n("vEsD"),m=n("cWnB"),d=n("6ctO");n("/2Ve");function f(){var e=Object(c.d)(o.b).email.replace(/[^a-zA-Z0-9]/g,"_"),t=l.a.useState(null),n=t[0],a=t[1],f=Object(r.a)("usersScience/"+e+"/notes/"),b=f.data,E=f.loading,h=f.error,y=Object(u.a)(["(min-width: 810px)","(min-width: 400px)","(min-width: 100px)"],["large","medium","small"],"large");if(E||!b)return l.a.createElement(i.a,null,"...");if(h)return l.a.createElement(i.a,null,":-(");var p=Object.keys(b).map((function(e){return b[e]}));return n?l.a.createElement(i.a,null,l.a.createElement(s.b,{note:"new"===n?{id:"new"}:p.filter((function(e){return e.id===n}))[0],screenSize:y})):l.a.createElement(i.a,null,l.a.createElement(d.a,{bg:"light",expand:"sm",sticky:"top",className:"mb-2 justify-content-between"},l.a.createElement(d.a.Brand,null,"Notes"),l.a.createElement(m.a,{size:"sm",variant:"outline-secondary",onClick:function(){return a("new")}},"+")),!!p&&p.map((function(e){return l.a.createElement(s.a,{key:e.id,note:e,setCurrentEditId:a})})))}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",l.a.createElement("h3",{style:{margin:0}},l.a.createElement(r.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),l.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},l.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var i=c;n("8ypT"),t.a=function(e){var t=e.children,n=Object(r.useStaticQuery)("2326376460");return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{siteTitle:n.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",l.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},n.site.siteMetadata.author)))))}},vEsD:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return j}));var a=n("rePB"),l=n("KQm4"),r=n("q1tI"),c=n.n(r),i=n("/MKj"),o=n("NKCw"),u=n("y6RJ"),s=n("fhwx"),m=n.n(s),d=n("VU5L"),f=n("Qu+8"),b=n("pJDg"),E=n("7vrA"),h=n("cWnB"),y=n("QojX"),p=n("6xyR"),v=n("J7+s");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t,n,a,l,r=e.note,i=e.setCurrentEditId,o=void 0===i?null:i,u=c.a.useState(!1),s=u[0],d=u[1];function b(){d((function(e){return!e}))}return"large"!==Object(f.a)(["(min-width: 810px)","(min-width: 400px)","(min-width: 100px)"],["large","medium","small"],"large")?c.a.createElement("div",{key:r.id},c.a.createElement("small",{className:s?"":"line-clamp"},m()(r.content.last_edit)),c.a.createElement("br",null),c.a.createElement(h.a,{variant:"outline-light",size:"sm",onClick:function(){return o(r.id)}}," ",c.a.createElement(v.e,null)),c.a.createElement(h.a,{variant:"outline-light",size:"sm",onClick:function(){return b()}}," ",c.a.createElement(v.d,null)),c.a.createElement("cite",{title:"cited_reference"},c.a.createElement("small",null,r.content.cited_reference)),"   ",c.a.createElement("cite",{title:"plagiarism"},c.a.createElement("small",null,r.date+"   ","  ",r.content.plagiarism)),c.a.createElement("hr",null)):c.a.createElement(p.a,{key:r.id,className:"mb-1"},c.a.createElement(p.a.Header,null,c.a.createElement(h.a,{variant:"outline-light",size:"sm",onClick:function(){return o(r.id)}}," ",c.a.createElement(v.e,null)),c.a.createElement(h.a,{variant:"outline-light",size:"sm",onClick:function(){return b()}}," ",c.a.createElement(v.d,null)),c.a.createElement("span",{className:"ml-2"},null!=(l=r.content)&&l.h6?l.h6:null!=l&&l.h5?l.h5:null!=l&&l.h4?l.h4:null!=l&&l.h3?l.h3:null!=l&&l.h2?l.h2:null!=l&&l.h1?l.h1:"Заголовок")),c.a.createElement(p.a.Body,null,c.a.createElement("blockquote",{className:"blockquote mb-0"},c.a.createElement("small",{className:s?"":"line-clamp"},null!=r&&null!==(t=r.content)&&void 0!==t&&t.last_edit?m()(r.content.last_edit):"-"),null!=r&&null!==(n=r.content)&&void 0!==n&&n.cited_reference?c.a.createElement("footer",{className:"blockquote-footer"},c.a.createElement("cite",{title:"Сited_Reference"}," ",r.content.cited_reference)):null,null!=r&&null!==(a=r.content)&&void 0!==a&&a.plagiarism?c.a.createElement("footer",{className:"blockquote-footer"},c.a.createElement("cite",{title:"Plagiarism"},r.date+"   "," ",r.content.plagiarism," ")):null)))}function j(e){var t,n,a,s=e.note,m=e.screenSize,f=Object(i.d)(d.b).email,p=Object(i.d)(d.b).user,v=null===(t=Object(i.d)(d.b))||void 0===t?void 0:t.avatarUrl,g=Object(r.useState)(null),w=g[0],j=g[1],C=Object(o.b)({defaultValues:null!=s&&s.content?s.content:{}}),S=C.handleSubmit,z=Object(r.useState)("last_edit"),x=z[0],D=z[1],N=Object(r.useState)([]),P=N[0];N[1];var B=function(e){if(console.log(e),f.length>6){var t,n=f.replace(/[^a-zA-Z0-9]/g,"_"),a=null!=s&&s.id&&"new"!==s.id?s.id:u.a.database().ref("usersScience/"+n).child("notes").push().key,r=null===(o=null==s||null===(t=s.content)||void 0===t?void 0:t.old_editions)||"function"!=typeof o&&"object"!=typeof o?[e.last_edit]:[].concat(Object(l.a)(Object.keys(s.content.old_editions).map((function(e){return s.content.old_editions[e]}))),[e.last_edit]);console.log(r);var c={id:a,type:"sciencenotes",content:k(k({},e),{},{old_editions:r,tags:P}),deleted:!1,email:f,user:p,avatarUrl:v||null,date:new Intl.DateTimeFormat("ru",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date)};console.log(c);var i={};return i["usersScience/"+n+"/notes/"+a]=c,u.a.database().ref().update(i).then((function(){j(!0),setTimeout(window.location.reload(),8e3)}))}var o};return c.a.createElement(o.a,C,"large"===m?c.a.createElement(E.a,null,c.a.createElement(b.a,{"aria-label":"Basic example",size:"sm"},c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h1")}},"h1"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h2")}},"h2"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h3")}},"h3"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h4")}},"h4"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h5")}},"h5"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("h6")}},"h6"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("last_edit")}},"Last Edit"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("cited_reference")}},"Cited Reference"),c.a.createElement(h.a,{variant:"outline-secondary",onClick:function(){return D("plagiarism")}},"Plagiarism")),c.a.createElement(y.a,{onSubmit:S(B)},function(){switch(x){case"h1":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 1"});case"h2":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 2"});case"h3":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 3"});case"h4":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 4"});case"h5":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 5"});case"h6":return c.a.createElement(O,{key:x,name:x,label:"Заголовок 6"});case"last_edit":return c.a.createElement(O,{key:x,name:x,label:"Текст"});case"cited_reference":return c.a.createElement(O,{key:x,name:x,label:"Источник"});case"plagiarism":return c.a.createElement(O,{key:x,name:x,label:"Уникальность"})}}(),c.a.createElement(h.a,{variant:"outline-secondary",type:"submit",size:"sm",block:!0,disabled:w},"Сохранить"),null!==(n=s.content)&&void 0!==n&&n.old_editions?c.a.createElement(_,{note:s,email:f}):null)):c.a.createElement(E.a,null,c.a.createElement(y.a,{onSubmit:S(B)},c.a.createElement(O,{name:"h6",label:"Заголовок"}),c.a.createElement(O,{name:"last_edit",label:"Текст"}),c.a.createElement(O,{name:"cited_reference",label:"Источник"}),c.a.createElement(O,{name:"plagiarism",label:"Уникальность"}),c.a.createElement(h.a,{variant:"outline-secondary",type:"submit",size:"sm",block:!0,disabled:w},"Сохранить")),null!==(a=s.content)&&void 0!==a&&a.old_editions?c.a.createElement(_,{note:s,email:f}):null))}function O(e){var t=e.name,n=e.label,a=void 0===n?null:n,l=Object(o.c)();return c.a.createElement(y.a.Group,{controlId:"field_"+t},c.a.createElement(y.a.Label,{className:"small text-muted"},a||t),c.a.createElement(y.a.Control,Object.assign({},l.register(t),{as:"textarea",rows:"3"})))}function _(e){var t=e.note,n=e.email;return c.a.createElement(h.a,{variant:"outline-secondary",size:"sm",block:!0,onClick:function(){return function(){if(n.length>6){var e=n.replace(/[^a-zA-Z0-9]/g,"_"),a=null!=t&&t.id&&"new"!==t.id?t.id:u.a.database().ref("usersScience/"+e).child("notes").push().key,l=k(k({},t.content),{},{old_editions:null}),r=k(k({},t),{},{content:l,date:new Intl.DateTimeFormat("ru",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date)});console.log(r);var c={};return c["usersScience/"+e+"/notes/"+a]=r,u.a.database().ref().update(c).then((function(){setTimeout(window.location.reload(),8e3)}))}}()}},t.content.old_editions.length,"  Удалить старые редакции")}}}]);
//# sourceMappingURL=component---src-pages-mysciencenotes-js-771dba3d09733a365ea3.js.map