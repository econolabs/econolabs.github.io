(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"8ypT":function(e,a,t){},Bl7J:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),i=function(e){var a=e.siteTitle;return n.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",n.a.createElement("h3",{style:{margin:0}},n.a.createElement(l.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},a)),n.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},n.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};i.defaultProps={siteTitle:""};var c=i;t("8ypT"),a.a=function(e){var a=e.children,t=Object(l.useStaticQuery)("2326376460");return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:t.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},n.a.createElement("main",null,a),n.a.createElement("footer",null,n.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",n.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},t.site.siteMetadata.author)))))}},Mx3M:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var r=t("KQm4"),n=t("q1tI"),l=t.n(n),i=t("jFIn"),c=t("Bl7J"),s=t("Xzxm"),u=t("TUci"),o=t("sjrs");function m(){var e=Object(i.a)("usersCraft"),a=e.data,t=e.loading,r=e.error,n=l.a.useState(null),u=n[0],o=n[1];return t||!a?l.a.createElement(c.a,null,l.a.createElement("div",null,"...")):r?l.a.createElement(c.a,null,l.a.createElement("div",null,":-(")):l.a.createElement(c.a,null,l.a.createElement(s.a,{items:Object.keys(a),title:"Logins",buttonTitle:"Выбрать",setSelectedItem:o}),l.a.createElement(d,{user:u,userData:a[u]}))}function d(e){var a,t=null!=e&&null!==(a=e.userData)&&void 0!==a&&a.posts?Object.keys(e.userData.posts).map((function(a){return e.userData.posts[a]})):[],n=Object(r.a)(new Set(t.filter((function(e){return!(null==e||!e.avatarUrl)})).map((function(e){return e.avatarUrl})))),i=Object(r.a)(new Set(t.filter((function(e){return!(null==e||!e.user)})).map((function(e){return e.user})))),c=t?Object(r.a)(new Set(t.map((function(e){return e.theme})))):[];return l.a.createElement(l.a.Fragment,null," ",l.a.createElement("div",{className:"media border p-3 mb-5"},n.map((function(e){return l.a.createElement("img",{key:e,src:e,alt:"",className:"m-3",style:{verticalAlign:"middle",width:"60px",height:"60px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})})),l.a.createElement("div",{className:"media-body"},l.a.createElement("p",null,"Рабочая тетрадь ",e.user),i.map((function(e){return l.a.createElement("p",{key:e},e)})))),l.a.createElement("div",null,!!c&&c.map((function(e){return l.a.createElement("div",{key:e},l.a.createElement(u.a,{variant:"primary"},e),l.a.createElement(o.a,{variant:"flush"},t.filter((function(a){return a.theme===e})).map((function(e,a){return l.a.createElement(o.a.Item,{key:a},"Задача: ",null!=e&&e.title?e.title:""," Дата/время: ",null!=e&&e.date?e.date:""," Id=",null!=e&&e.id?l.a.createElement("small",null,e.id):"")}))))}))))}},sjrs:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),i=t.n(l),c=t("q1tI"),s=t.n(c),u=(t("2W6z"),t("y8DL")),o=t("vUet"),m=t("rQNl"),d=t("VWqr"),v=["bsPrefix","active","disabled","className","variant","action","as","onClick"],f={variant:void 0,active:!1,disabled:!1},p=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,u=e.disabled,m=e.className,f=e.variant,p=e.action,b=e.as,E=e.onClick,g=Object(n.a)(e,v);t=Object(o.a)(t,"list-group-item");var h=Object(c.useCallback)((function(e){if(u)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[u,E]);return u&&void 0===g.tabIndex&&(g.tabIndex=-1,g["aria-disabled"]=!0),s.a.createElement(d.a,Object(r.a)({ref:a},g,{as:b||(p?g.href?"a":"button":"div"),onClick:h,className:i()(m,t,l&&"active",u&&"disabled",f&&t+"-"+f,p&&t+"-action")}))}));p.defaultProps=f,p.displayName="ListGroupItem";var b=p,E=["className","bsPrefix","variant","horizontal","as"],g={variant:void 0,horizontal:void 0},h=s.a.forwardRef((function(e,a){var t,l=Object(u.a)(e,{activeKey:"onSelect"}),c=l.className,d=l.bsPrefix,v=l.variant,f=l.horizontal,p=l.as,b=void 0===p?"div":p,g=Object(n.a)(l,E),h=Object(o.a)(d,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,s.a.createElement(m.a,Object(r.a)({ref:a},g,{as:b,className:i()(c,h,v&&h+"-"+v,t&&h+"-"+t)}))}));h.defaultProps=g,h.displayName="ListGroup",h.Item=b;a.a=h}}]);
//# sourceMappingURL=component---src-pages-searchworkbooksbyemail-js-3e0017b6d116ea6bc7ee.js.map