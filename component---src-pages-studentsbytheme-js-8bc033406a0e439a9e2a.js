(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(e){var t=e.siteTitle;return r.a.createElement("nav",{className:"navbar  navbar-light bg-light "}," ",r.a.createElement("h3",{style:{margin:0}},r.a.createElement(l.Link,{to:"/",style:{color:"gray",textDecoration:"none"}},t)),r.a.createElement("a",{className:"navbar-brand",href:"https://vk.com/id151078439"},r.a.createElement("img",{src:"https://sun9-37.userapi.com/c317630/v317630439/76a0/Bz6QTfBog0I.jpg?ava=1",alt:"",style:{verticalAlign:"middle",width:"40px",height:"40px",borderRadius:"50%",filter:"grayscale(100%)",objectFit:"cover"}})))};i.defaultProps={siteTitle:""};var c=i;a("8ypT"),t.a=function(e){var t=e.children,a=Object(l.useStaticQuery)("2326376460");return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:800,padding:"2rem"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,r.a.createElement("span",{style:{color:"darkgray"}},"© ",(new Date).getFullYear(),", "," ",r.a.createElement("a",{href:"https://vk.com/id151078439",style:{color:"darkgray"}},a.site.siteMetadata.author)))))}},uZHt:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a("KQm4"),r=a("q1tI"),l=a.n(r),i=a("jFIn"),c=a("Bl7J"),o=a("cWnB"),s=a("vYJ8"),u=a("6xyR");function m(){var e=Object(i.a)("usersCraft"),t=e.data,a=e.loading,r=e.error;if(a||!t)return l.a.createElement(c.a,null,l.a.createElement("div",null,"..."));if(r)return l.a.createElement(c.a,null,l.a.createElement("div",null,":-("));var o=[];Object.keys(t).forEach((function(e){var a;null!=t&&null!==(a=t[e])&&void 0!==a&&a.posts&&Object.keys(t[e].posts).forEach((function(a){var n;if(null!==(n=t[e].posts)&&void 0!==n&&n[a]){var r=t[e].posts[a];o.push({theme:null==r?void 0:r.theme,title:null==r?void 0:r.title,user_login:e,user:null==r?void 0:r.user})}}))}));var s=o?Object(n.a)(new Set(o.map((function(e){return e.theme})))):[];return l.a.createElement(c.a,null,s.map((function(e,t){return l.a.createElement(d,{key:e,theme:e,index:t,theme_posts:o.filter((function(t){return t.theme===e}))})})))}function d(e){var t=l.a.useState(!1),a=t[0],r=t[1],i=e.theme_posts?Object(n.a)(new Set(e.theme_posts.map((function(e){return e.user_login})))):[];return l.a.createElement(u.a,{className:"m-3"},l.a.createElement(u.a.Header,null,e.theme),l.a.createElement(u.a.Body,null,l.a.createElement(o.a,{onClick:function(){return r(!a)},"aria-controls":"collapse-text"+e.index,"aria-expanded":a,variant:"outline-secondary"},e.theme),l.a.createElement(s.a,{in:a},l.a.createElement("div",{id:"collapse-text"+e.index},e.theme_posts.length,i.map((function(e){return l.a.createElement("div",{key:e},e)}))))))}}}]);
//# sourceMappingURL=component---src-pages-studentsbytheme-js-8bc033406a0e439a9e2a.js.map