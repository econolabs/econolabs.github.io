(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=function(e){var t=e.siteTitle;return n.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",n.a.createElement("h3",{style:{margin:0}},n.a.createElement(l.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),n.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},n.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var i=c;a("8ypT"),t.a=function(e){var t=e.children,a=Object(l.useStaticQuery)("2326376460");return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},n.a.createElement("main",null,t),n.a.createElement("footer",null,n.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",n.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},cwrH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var r=a("KQm4"),n=a("q1tI"),l=a.n(n),c=a("jFIn"),i=a("/MKj"),m=a("Bl7J"),o=a("VU5L"),s=a("YsFu"),d=a("udPi"),u=a("mdoJ"),p=a("pjze"),y=a("LUFE"),h=a("cuzT"),f=a("TUci"),E=a("fhwx"),b=a.n(E);function v(){var e=Object(i.d)(o.b).email.replace(/[^a-zA-Z0-9]/g,"_"),t=Object(i.d)(o.b).avatarUrl,a=Object(i.d)(o.b).user,n=Object(c.a)("usersCraft/"+e+"/posts/"),E=n.data,v=n.loading,g=n.error;if(v||!E)return l.a.createElement(m.a,null,"...");if(g)return l.a.createElement(m.a,null,":-(");var x=Object.keys(E).map((function(e){return E[e]})),w=x?Object(r.a)(new Set(x.map((function(e){return e.theme})))):[];return l.a.createElement(m.a,null,l.a.createElement("div",{className:"media border p-3 mb-5"},l.a.createElement("img",{src:t,alt:"",className:"m-3",style:{verticalAlign:"middle",width:"60px",height:"60px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}}),l.a.createElement("div",{className:"media-body"},l.a.createElement("h4",null,a," ",l.a.createElement("small",null,l.a.createElement("i",null,new Intl.DateTimeFormat("ru",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date)))),l.a.createElement("p",null,"Рабочая тетрадь"))),l.a.createElement("div",null,!!w&&w.map((function(t){return l.a.createElement("div",{key:t},l.a.createElement(f.a,{variant:"primary"},t),x.filter((function(e){return e.theme===t})).map((function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(f.a,{variant:"secondary",className:"mt-3"},t.avatarUrl?l.a.createElement("img",{src:t.avatarUrl,alt:"",className:"m-2",style:{verticalAlign:"middle",width:"50px",height:"50px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}}):null,t.title),l.a.createElement("div",null,"accountingwithprofitscash"!==t.type||(null===(a=t.quizString)||"function"!=typeof a&&"object"!=typeof a)?b()(t.quizString):l.a.createElement(u.a,{xlArray:Object(s.e)(t.quizString,0,0)}),b()("<br><span>Ответ: "+("calculation"===t.type?t.comment:t.answer)+'</span>\n                          <span class="ml-5">Дата/время: '+t.date+"</span><br>\n                          "+(t.user?"Решено: "+t.user:"")+"\n                          ")),(null==t?void 0:t.htmlfeedback)&&l.a.createElement("div",null,b()(t.htmlfeedback)),"spreadsheet"===t.type&&!(null==t||!t.content)&&l.a.createElement(u.a,{xlArray:Object(s.e)(t.content,0,0)}),"calculation"===t.type&&l.a.createElement(p.a,{quiz:t,xlArray:Object(s.e)(t.content,0,0)}),"balancestackedbars"===t.type&&l.a.createElement(y.a,{quiz:t}),("balancestackedbarswithpredefinedindicators"===t.type||"arraycategoriesbarapexchartwithpredefinedindicators"===t.type||"arraycategorieslineapexchartwithpredefinedindicators"===t.type)&&!0!==(null==t?void 0:t.deleted)&&l.a.createElement(y.e,{quiz:t}),("html"===t.type||"markdown"===t.type)&&l.a.createElement("div",null,b()(t.content)),("datetimebarapexchart"===t.type||"datetimelineapexchart"===t.type||"arraycategorieslineapexchart"===t.type||"arraycategoriesbarapexchart"===t.type)&&!0!==(null==t?void 0:t.deleted)&&l.a.createElement(d.c,{firenode:t.content,mediaItem:t.type}),("scatterquotesapexchart"===t.type||"scatterquotesapexchartoptions"===t.type||"scatterapexchart"===t.type)&&!0!==(null==t?void 0:t.deleted)&&l.a.createElement(d.b,{firenode:t.content}),("datalinequotesapexchart"===t.type||"datalinequotesapexchartoptions"===t.type||"datetimeareanocategoriesapexchart"===t.type)&&!0!==(null==t?void 0:t.deleted)&&l.a.createElement(d.a,{firenode:t.content}),"media"===t.type?l.a.createElement(d.e,{datafirenode:"/usersCraft/"+e+"/data/"+t.content}):null,"accountingwithprofitscash"===t.type?l.a.createElement(h.d,{records:t.content,mediaItems:t.mediaItems}):null);var a})))}))))}},pjze:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("q1tI"),n=a.n(r),l=a("jFIn"),c=a("gqyb"),i=a("MBJH");function m(e){var t=e.quiz,a=e.xlArray,r=Object(l.a)("openmediadata/"+t.answer),m=r.data,o=r.loading,s=r.error;if(o||!m)return n.a.createElement("div",null,"...");if(s)return n.a.createElement("div",null,":-(");var d=Object.keys(m).map((function(e){return m[e]})),u=Object(c.d)(d,a);return n.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,u[0].map((function(e,t){return n.a.createElement("th",{key:t,className:"text-center"},u[0][t])})))),n.a.createElement("tbody",null,u.map((function(e,t){if(t>0)return n.a.createElement("tr",{key:t},e.map((function(a,r){return n.a.createElement("td",{key:t+r},n.a.createElement("small",{className:"ml-1"}," ",e[r]),"   ")})))}))))}}}]);
//# sourceMappingURL=component---src-pages-myworkbook-js-a6c4dd406b162554d547.js.map