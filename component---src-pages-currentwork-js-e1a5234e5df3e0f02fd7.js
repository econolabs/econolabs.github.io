(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("dwav"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",l.a.createElement("h3",{style:{margin:0}},l.a.createElement(o.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),l.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},l.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var i=c;a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",l.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},bmiZ:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));a("pJf4"),a("q8oJ"),a("cFtU"),a("m210"),a("4DPX"),a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("ToIb"),a("sC2a");var n=a("q1tI"),r=a.n(n),l=a("y6RJ"),o=a("MBJH"),c=a("Bl7J");function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=new Intl.DateTimeFormat("en",{weekday:"short",year:"numeric",month:"short",day:"numeric"}).format(new Date).replace(/[^a-zA-Z0-9]/g,"_");function s(){var e=r.a.useState(null),t=e[0],a=e[1];r.a.useEffect((function(){l.a.database().ref("currentDay/"+m+"/posts/").once("value").then((function(e){var t=[];e.forEach((function(e){e.key;var a=e.val();t.push(a)})),a(t),console.log(t)})).catch((function(e){return console.log(e)}))}),[]);var n=t?i(new Set(t.map((function(e){return e.user})))):[],u=t?i(new Set(t.map((function(e){return e.title})))):[];return r.a.createElement(c.a,null,r.a.createElement("div",null,t?r.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("small",{className:"ml-1"},"User")),u.length>0&&u.map((function(e,t){return r.a.createElement("th",{key:e,"data-toggle":"tooltip","data-placement":"bottom",title:e},r.a.createElement("small",null,t))})))),r.a.createElement("tbody",null,n.length>0&&n.map((function(e,a){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement("small",{className:"ml-1"},e)),u.length>0&&u.map((function(a,n){return r.a.createElement("td",{key:e+a},r.a.createElement("small",null,t.filter((function(t){return t.user===e&&t.title===a})).length>0?"+":"-"))})))})))):"..."))}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Econolabs","author":"Дмитрий Головенкин"}}}}')}}]);
//# sourceMappingURL=component---src-pages-currentwork-js-e1a5234e5df3e0f02fd7.js.map