(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var r=a("dwav"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),c=function(e){var t=e.siteTitle;return l.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",l.a.createElement("h3",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),l.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},l.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};c.defaultProps={siteTitle:""};var o=c;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",l.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},VQdY:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));a("pJf4"),a("q8oJ"),a("cFtU"),a("m210"),a("4DPX"),a("YbXK"),a("ToIb"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var r=a("q1tI"),n=a.n(r),l=a("jFIn"),i=a("Bl7J"),c=(a("TAD1"),a("jDKy")),o=a("97+O"),s=n.a.forwardRef((function(e,t){var a=e.children,r=e.onClick;return n.a.createElement("a",{href:"",ref:t,onClick:function(e){e.preventDefault(),r(e)}},a,"▼")})),u=n.a.forwardRef((function(e,t){var a=e.children,r=e.style,l=e.className,i=e["aria-labelledby"],o=n.a.useState(""),s=o[0],u=o[1];return n.a.createElement("div",{ref:t,style:r,className:l,"aria-labelledby":i},n.a.createElement(c.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return u(e.target.value)},value:s}),n.a.createElement("ul",{className:"list-unstyled"},n.a.Children.toArray(a).filter((function(e){return!s||e.props.children.toLowerCase().startsWith(s)}))))}));function m(e){return n.a.createElement(o.a,null,n.a.createElement(o.a.Toggle,{as:s,id:"dropdown-custom-components"},"Список"),n.a.createElement(o.a.Menu,{as:u},!!e.dropDownItems&&e.dropDownItems.map((function(t){return n.a.createElement(o.a.Item,{key:t,eventKey:t,onSelect:function(t){return e.selectedItem(t)}},t)}))))}var d=a("TUci"),f=a("wx14"),v=a("zLVn"),p=a("TSYQ"),b=a.n(p),y=(a("2W6z"),a("JCAc")),h=a("vUet"),E=a("rQNl"),g=a("VWqr"),w=a("ILyh"),j=n.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.active,i=e.disabled,c=e.className,o=e.variant,s=e.action,u=e.as,m=e.eventKey,d=e.onClick,p=Object(v.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(h.b)(a,"list-group-item");var y=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();d&&d(e)}),[i,d]);return n.a.createElement(g.a,Object(f.a)({ref:t},p,{eventKey:Object(w.b)(m,p.href),as:u||(s?p.href?"a":"button":"div"),onClick:y,className:b()(c,a,l&&"active",i&&"disabled",o&&a+"-"+o,s&&a+"-action")}))}));j.defaultProps={variant:null,active:!1,disabled:!1},j.displayName="ListGroupItem";var k=j,N=n.a.forwardRef((function(e,t){var a,r=Object(y.a)(e,{activeKey:"onSelect"}),l=r.className,i=r.bsPrefix,c=r.variant,o=r.horizontal,s=r.as,u=void 0===s?"div":s,m=Object(v.a)(r,["className","bsPrefix","variant","horizontal","as"]);return i=Object(h.b)(i,"list-group"),a=o?!0===o?"horizontal":"horizontal-"+o:null,n.a.createElement(E.a,Object(f.a)({ref:t},m,{as:u,className:b()(l,i,c&&i+"-"+c,a&&i+"-"+a)}))}));N.defaultProps={variant:null,horizontal:null},N.displayName="ListGroup",N.Item=k;var I=N;function O(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function S(){var e=Object(l.a)("usersCraft"),t=e.data,a=e.loading,r=e.error,c=n.a.useState(null),o=c[0],s=c[1];return a||!t?n.a.createElement(i.a,null,n.a.createElement("div",null,"...")):r?n.a.createElement(i.a,null,n.a.createElement("div",null,":-(")):n.a.createElement(i.a,null,n.a.createElement(m,{dropDownItems:Object.keys(t),selectedItem:s}),n.a.createElement(x,{user:o,userData:t[o]}))}function x(e){var t,a=(null==e||null===(t=e.userData)||void 0===t?void 0:t.posts)?Object.keys(e.userData.posts).map((function(t){return e.userData.posts[t]})):[],r=O(new Set(a.filter((function(e){return!!(null==e?void 0:e.avatarUrl)})).map((function(e){return e.avatarUrl})))),l=O(new Set(a.filter((function(e){return!!(null==e?void 0:e.user)})).map((function(e){return e.user})))),i=a?O(new Set(a.map((function(e){return e.theme})))):[];return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"media border p-3 mb-5"},r.map((function(e){return n.a.createElement("img",{key:e,src:e,alt:"",className:"m-3",style:{verticalAlign:"middle",width:"60px",height:"60px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})})),n.a.createElement("div",{className:"media-body"},n.a.createElement("p",null,"Рабочая тетрадь ",e.user),l.map((function(e){return n.a.createElement("p",{key:e},e)})))),n.a.createElement("div",null,!!i&&i.map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(d.a,{variant:"primary"},e),n.a.createElement(I,{variant:"flush"},a.filter((function(t){return t.theme===e})).map((function(e,t){return n.a.createElement(I.Item,{key:t},"Задача: ",e.title," Дата/время: ",e.date)}))))}))))}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Econolabs","author":"Дмитрий Головенкин"}}}}')}}]);
//# sourceMappingURL=component---src-pages-searchworkbooks-js-b6b3f22d139ee53792ae.js.map