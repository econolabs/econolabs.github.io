(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var r=a("dwav"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",l.a.createElement("h3",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),l.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},l.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var o=c;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",l.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},cwrH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));a("pJf4"),a("q8oJ"),a("cFtU"),a("m210"),a("4DPX"),a("YbXK"),a("ToIb"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sC2a");var r=a("q1tI"),n=a.n(r),l=a("jFIn"),i=a("/MKj"),c=a("Bl7J"),o=a("VU5L"),s=a("YsFu"),u=a("OLtK"),m=a("lr/1"),d=a("2mvg");function p(e){var t=Object(l.a)(e.datafirenode),a=t.data,r=t.loading,i=t.error;return r||!a?n.a.createElement("div",null,"..."):i?n.a.createElement("div",null,":-)"):n.a.createElement("div",null,Object.keys(a).map((function(e,t){return"scatterquotesapexchart"===e||"scatterquotesapexchartoptions"===e?n.a.createElement(f,{key:t,firenode:a[e]}):"datalinequotesapexchart"===e||"datalinequotesapexchartoptions"===e?n.a.createElement(v,{key:t,firenode:a[e]}):"images"===e?n.a.createElement(E,{key:t,urls:a.images.urls}):null})))}function f(e){var t=e.firenode,a=Object.keys(t.series).map((function(e){return[t.series[e][0],t.series[e][1]]}));return n.a.createElement(u.a,{series:a,options:(null==t?void 0:t.options)?t.options:{}})}function v(e){var t=e.firenode,a=Object.keys(t.series).map((function(e){return{name:t.series[e].name,data:Object.keys(t.series[e].data).map((function(a){return[t.series[e].data[a][0],t.series[e].data[a][1]]}))}}));return n.a.createElement(m.a,{series:a,options:(null==t?void 0:t.options)?t.options:{}})}function E(e){var t=e.urls;return n.a.createElement(n.a.Fragment,null,(null==t?void 0:t[0])?n.a.createElement(d.a,{src:t[0]}):null,(null==t?void 0:t[1])?n.a.createElement(d.a,{src:t[1]}):null,(null==t?void 0:t[2])?n.a.createElement(d.a,{src:t[2]}):null,(null==t?void 0:t[3])?n.a.createElement(d.a,{src:t[3]}):null,(null==t?void 0:t[4])?n.a.createElement(d.a,{src:t[4]}):null)}var y=a("IKAq"),b=a("MBJH");function h(e){var t=e.xlArray;return n.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null," "),t[0].map((function(e,t){return n.a.createElement("th",{key:t,className:"text-center"},y.a[t])})))),n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null," ",n.a.createElement("small",{className:"ml-1"},t+1)),e.map((function(a,r){return n.a.createElement("td",{key:t+r},n.a.createElement("small",null,e[r]))})))}))))}var g=a("TUci"),k=a("fhwx"),w=a.n(k);function j(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function O(){var e=Object(i.c)(o.b).email.replace(/[^a-zA-Z0-9]/g,"_"),t=Object(i.c)(o.b).avatarUrl,a=Object(i.c)(o.b).user,r=Object(l.a)("usersCraft/"+e+"/posts/"),u=r.data,m=r.loading,d=r.error;if(m||!u)return n.a.createElement(c.a,null,"...");if(d)return n.a.createElement(c.a,null,":-(");var f=Object.keys(u).map((function(e){return u[e]})),v=f?j(new Set(f.map((function(e){return e.theme})))):[];return n.a.createElement(c.a,null,n.a.createElement("div",{className:"media border p-3 mb-5"},n.a.createElement("img",{src:t,alt:"",className:"m-3",style:{verticalAlign:"middle",width:"60px",height:"60px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}}),n.a.createElement("div",{className:"media-body"},n.a.createElement("h4",null,a," ",n.a.createElement("small",null,n.a.createElement("i",null,new Intl.DateTimeFormat("ru",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date)))),n.a.createElement("p",null,"Рабочая тетрадь"))),n.a.createElement("div",null,!!v&&v.map((function(t){return n.a.createElement("div",{key:t},n.a.createElement(g.a,{variant:"primary"},t),f.filter((function(e){return e.theme===t})).map((function(t){return n.a.createElement("div",{key:t.id},n.a.createElement(g.a,{variant:"secondary",className:"mt-3"},t.avatarUrl?n.a.createElement("img",{src:t.avatarUrl,alt:"",className:"m-2",style:{verticalAlign:"middle",width:"50px",height:"50px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}}):null,t.title),n.a.createElement("div",null,w()(t.quizString+"<br><span>Ответ: "+t.answer+'</span><span class="ml-5">Дата/время: '+t.date+"</span><br>"+(t.user?"Решено: "+t.user:""))),(null==t?void 0:t.htmlfeedback)&&n.a.createElement("div",null,w()(t.htmlfeedback)),"spreadsheet"===t.type&&!!(null==t?void 0:t.content)&&n.a.createElement(h,{xlArray:Object(s.e)(t.content,0,0)}),"media"===t.type?n.a.createElement(p,{datafirenode:"/usersCraft/"+e+"/data/"+t.content}):null)})))}))))}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Econolabs","author":"Дмитрий Головенкин"}}}}')}}]);
//# sourceMappingURL=component---src-pages-myworkbook-js-9f2824ba14e132284b5f.js.map