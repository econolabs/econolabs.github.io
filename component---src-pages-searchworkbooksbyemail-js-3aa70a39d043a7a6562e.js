(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var r=a("dwav"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",l.a.createElement("h3",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),l.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},l.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var o=c;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",l.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},Mx3M:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));a("pJf4"),a("q8oJ"),a("cFtU"),a("m210"),a("4DPX"),a("YbXK"),a("ToIb"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var r=a("q1tI"),n=a.n(r),l=a("jFIn"),i=a("Bl7J"),c=a("Xzxm"),o=a("TUci"),s=a("sjrs");function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function d(){var e=Object(l.a)("usersCraft"),t=e.data,a=e.loading,r=e.error,o=n.a.useState(null),s=o[0],u=o[1];return a||!t?n.a.createElement(i.a,null,n.a.createElement("div",null,"...")):r?n.a.createElement(i.a,null,n.a.createElement("div",null,":-(")):n.a.createElement(i.a,null,n.a.createElement(c.a,{items:Object.keys(t),title:"Logins",buttonTitle:"Выбрать",setSelectedItem:u}),n.a.createElement(f,{user:s,userData:t[s]}))}function f(e){var t,a=(null==e||null===(t=e.userData)||void 0===t?void 0:t.posts)?Object.keys(e.userData.posts).map((function(t){return e.userData.posts[t]})):[],r=u(new Set(a.filter((function(e){return!!(null==e?void 0:e.avatarUrl)})).map((function(e){return e.avatarUrl})))),l=u(new Set(a.filter((function(e){return!!(null==e?void 0:e.user)})).map((function(e){return e.user})))),i=a?u(new Set(a.map((function(e){return e.theme})))):[];return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"media border p-3 mb-5"},r.map((function(e){return n.a.createElement("img",{key:e,src:e,alt:"",className:"m-3",style:{verticalAlign:"middle",width:"60px",height:"60px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})})),n.a.createElement("div",{className:"media-body"},n.a.createElement("p",null,"Рабочая тетрадь ",e.user),l.map((function(e){return n.a.createElement("p",{key:e},e)})))),n.a.createElement("div",null,!!i&&i.map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(o.a,{variant:"primary"},e),n.a.createElement(s.a,{variant:"flush"},a.filter((function(t){return t.theme===e})).map((function(e,t){return n.a.createElement(s.a.Item,{key:t},"Задача: ",(null==e?void 0:e.title)?e.title:""," Дата/время: ",(null==e?void 0:e.date)?e.date:""," Id=",(null==e?void 0:e.id)?n.a.createElement("small",null,e.id):"")}))))}))))}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Econolabs","author":"Дмитрий Головенкин"}}}}')},sjrs:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),o=a.n(c),s=(a("2W6z"),a("JCAc")),u=a("vUet"),m=a("rQNl"),d=a("VWqr"),f=a("ILyh"),v=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.active,s=e.disabled,m=e.className,v=e.variant,p=e.action,b=e.as,y=e.eventKey,h=e.onClick,E=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(u.b)(a,"list-group-item");var g=Object(c.useCallback)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[s,h]);return o.a.createElement(d.a,Object(r.a)({ref:t},E,{eventKey:Object(f.b)(y,E.href),as:b||(p?E.href?"a":"button":"div"),onClick:g,className:i()(m,a,l&&"active",s&&"disabled",v&&a+"-"+v,p&&a+"-action")}))}));v.defaultProps={variant:null,active:!1,disabled:!1},v.displayName="ListGroupItem";var p=v,b=o.a.forwardRef((function(e,t){var a,l=Object(s.a)(e,{activeKey:"onSelect"}),c=l.className,d=l.bsPrefix,f=l.variant,v=l.horizontal,p=l.as,b=void 0===p?"div":p,y=Object(n.a)(l,["className","bsPrefix","variant","horizontal","as"]);return d=Object(u.b)(d,"list-group"),a=v?!0===v?"horizontal":"horizontal-"+v:null,o.a.createElement(m.a,Object(r.a)({ref:t},y,{as:b,className:i()(c,d,f&&d+"-"+f,a&&d+"-"+a)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=p;t.a=b}}]);
//# sourceMappingURL=component---src-pages-searchworkbooksbyemail-js-3aa70a39d043a7a6562e.js.map