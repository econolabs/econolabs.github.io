(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5lpv":function(r,e,t){var n,a,o;t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("AqHK"),t("U6Bt"),t("JHok"),t("YbXK"),t("cFtU"),t("MIFh"),t("E5k/"),t("R48M"),a=[r],void 0===(o="function"==typeof(n=function(r){"use strict";var e=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r};function t(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}var n={order:2,precision:2,period:null};function a(r,e){var t=[],n=[];r.forEach((function(r,a){null!==r[1]&&(n.push(r),t.push(e[a]))}));var a=n.reduce((function(r,e){return r+e[1]}),0)/n.length,o=n.reduce((function(r,e){var t=e[1]-a;return r+t*t}),0);return 1-n.reduce((function(r,e,n){var a=t[n],o=e[1]-a[1];return r+o*o}),0)/o}function o(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var i={linear:function(r,e){for(var t=[0,0,0,0,0],n=0,i=0;i<r.length;i++)null!==r[i][1]&&(n++,t[0]+=r[i][0],t[1]+=r[i][1],t[2]+=r[i][0]*r[i][0],t[3]+=r[i][0]*r[i][1],t[4]+=r[i][1]*r[i][1]);var u=n*t[2]-t[0]*t[0],c=n*t[3]-t[0]*t[1],s=0===u?0:o(c/u,e.precision),l=o(t[1]/n-s*t[0]/n,e.precision),p=function(r){return[o(r,e.precision),o(s*r+l,e.precision)]},f=r.map((function(r){return p(r[0])}));return{points:f,predict:p,equation:[s,l],r2:o(a(r,f),e.precision),string:0===l?"y = "+s+"x":"y = "+s+"x + "+l}},exponential:function(r,e){for(var t=[0,0,0,0,0,0],n=0;n<r.length;n++)null!==r[n][1]&&(t[0]+=r[n][0],t[1]+=r[n][1],t[2]+=r[n][0]*r[n][0]*r[n][1],t[3]+=r[n][1]*Math.log(r[n][1]),t[4]+=r[n][0]*r[n][1]*Math.log(r[n][1]),t[5]+=r[n][0]*r[n][1]);var i=t[1]*t[2]-t[5]*t[5],u=Math.exp((t[2]*t[3]-t[5]*t[4])/i),c=(t[1]*t[4]-t[5]*t[3])/i,s=o(u,e.precision),l=o(c,e.precision),p=function(r){return[o(r,e.precision),o(s*Math.exp(l*r),e.precision)]},f=r.map((function(r){return p(r[0])}));return{points:f,predict:p,equation:[s,l],string:"y = "+s+"e^("+l+"x)",r2:o(a(r,f),e.precision)}},logarithmic:function(r,e){for(var t=[0,0,0,0],n=r.length,i=0;i<n;i++)null!==r[i][1]&&(t[0]+=Math.log(r[i][0]),t[1]+=r[i][1]*Math.log(r[i][0]),t[2]+=r[i][1],t[3]+=Math.pow(Math.log(r[i][0]),2));var u=o((n*t[1]-t[2]*t[0])/(n*t[3]-t[0]*t[0]),e.precision),c=o((t[2]-u*t[0])/n,e.precision),s=function(r){return[o(r,e.precision),o(o(c+u*Math.log(r),e.precision),e.precision)]},l=r.map((function(r){return s(r[0])}));return{points:l,predict:s,equation:[c,u],string:"y = "+c+" + "+u+" ln(x)",r2:o(a(r,l),e.precision)}},power:function(r,e){for(var t=[0,0,0,0,0],n=r.length,i=0;i<n;i++)null!==r[i][1]&&(t[0]+=Math.log(r[i][0]),t[1]+=Math.log(r[i][1])*Math.log(r[i][0]),t[2]+=Math.log(r[i][1]),t[3]+=Math.pow(Math.log(r[i][0]),2));var u=(n*t[1]-t[0]*t[2])/(n*t[3]-Math.pow(t[0],2)),c=(t[2]-u*t[0])/n,s=o(Math.exp(c),e.precision),l=o(u,e.precision),p=function(r){return[o(r,e.precision),o(o(s*Math.pow(r,l),e.precision),e.precision)]},f=r.map((function(r){return p(r[0])}));return{points:f,predict:p,equation:[s,l],string:"y = "+s+"x^"+l,r2:o(a(r,f),e.precision)}},polynomial:function(r,e){for(var n=[],i=[],u=0,c=0,s=r.length,l=e.order+1,p=0;p<l;p++){for(var f=0;f<s;f++)null!==r[f][1]&&(u+=Math.pow(r[f][0],p)*r[f][1]);n.push(u),u=0;for(var v=[],h=0;h<l;h++){for(var d=0;d<s;d++)null!==r[d][1]&&(c+=Math.pow(r[d][0],p+h));v.push(c),c=0}i.push(v)}i.push(n);for(var y=function(r,e){for(var t=r,n=r.length-1,a=[e],o=0;o<n;o++){for(var i=o,u=o+1;u<n;u++)Math.abs(t[o][u])>Math.abs(t[o][i])&&(i=u);for(var c=o;c<n+1;c++){var s=t[c][o];t[c][o]=t[c][i],t[c][i]=s}for(var l=o+1;l<n;l++)for(var p=n;p>=o;p--)t[p][l]-=t[p][o]*t[o][l]/t[o][o]}for(var f=n-1;f>=0;f--){for(var v=0,h=f+1;h<n;h++)v+=t[h][f]*a[h];a[f]=(t[n][f]-v)/t[f][f]}return a}(i,l).map((function(r){return o(r,e.precision)})),m=function(r){return[o(r,e.precision),o(y.reduce((function(e,t,n){return e+t*Math.pow(r,n)}),0),e.precision)]},g=r.map((function(r){return m(r[0])})),E="y = ",O=y.length-1;O>=0;O--)E+=O>1?y[O]+"x^"+O+" + ":1===O?y[O]+"x + ":y[O];return{string:E,points:g,predict:m,equation:[].concat(t(y)).reverse(),r2:o(a(r,g),e.precision)}}};r.exports=Object.keys(i).reduce((function(r,t){return e({_round:o},r,(c=function(r,a){return i[t](r,e({},n,a))},(u=t)in(a={})?Object.defineProperty(a,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[u]=c,a));var a,u,c}),{})})?n.apply(e,a):n)||(r.exports=o)},lXFy:function(r,e,t){"use strict";t.r(e);t("xtjI"),t("4DPX"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("v9g0"),t("YBKJ");var n=t("q1tI"),a=t.n(n),o=t("o+DJ"),i=t.n(o),u=t("5lpv"),c=t.n(u);var s=function(r){var e=c.a.linear(r.arrayOfarrays);return a.a.createElement("div",null,e.string," ","r2="+e.r2)},l=t("7vrA"),p=t("pJDg"),f=t("cWnB");function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function h(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}e.default=function(r){var e=Object(n.useState)("ROSN"),t=e[0],o=e[1],u=function(r,e){return Number(Math.round(r+"e"+e)+"e-"+e)},c=[],v=[],d=[],y=[];r.data.forEach((function(r){if("IMOEX"===r.node.TICKER){var e=u(100*(r.node.CLOSE-r.node.OPEN)/r.node.OPEN,2);isNaN(e)||c.push({DATE:r.node.DATE,PERIODRETURN:e}),d.push({date:r.node.DATE,value:parseFloat(r.node.CLOSE)})}if(r.node.TICKER===t){var n=u(100*(r.node.CLOSE-r.node.OPEN)/r.node.OPEN,2);isNaN(n)||v.push({DATE:r.node.DATE,PERIODRETURN:n}),y.push({date:r.node.DATE,value:parseFloat(r.node.CLOSE)})}}));var m=y[0].value,g=d.filter((function(r){return r.date===y[0].date}))[0].value,E=y.map((function(r){var e=h({},r);return e.value=u(100*r.value/m,2),e})),O=y.map((function(r){var e=d.filter((function(e){return e.date===r.date}))[0],t=h({},e);return t.value=u(100*e.value/g,2),t})),b=y.map((function(r){if(!/^(\d){8}$/.test(r.date))return"invalid date";var e=r.date.substr(0,4),t=r.date.substr(4,2),n=r.date.substr(6,2);return new Date(e,t,n).getTime()})),M=[],x=[];v.length>0&&v.forEach((function(r){var e=c.find((function(e){return e.DATE===r.DATE})).PERIODRETURN;M.push({horizontal:e,vertical:r.PERIODRETURNx}),x.push([e,r.PERIODRETURN])}));var w=[{name:"Индекс",data:O.map((function(r){return r.value}))},{name:"Актив",data:E.map((function(r){return r.value}))}],D={chart:{type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:b},tooltip:{x:{format:"dd/MM/yy"}}},P={chart:{type:"scatter",toolbar:{show:!1},zoom:{enabled:!0,type:"xy"}},xaxis:{title:{text:"Доходность фондового индекса за месяц",style:{color:"gray",fontSize:"1rem",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:200,cssClass:"apexcharts-yaxis-title"}},tickAmount:16,labels:{formatter:function(r){return parseFloat(r).toFixed(1)}},min:-40,max:40},yaxis:{title:{text:"Доходность актива за месяц",style:{color:"gray",fontSize:"1rem",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:200,cssClass:"apexcharts-yaxis-title"}},tickAmount:16,labels:{formatter:function(r){return parseFloat(r).toFixed(1)}},min:-40,max:40}},N=[{name:"Доходность актива за период",data:x}];return a.a.createElement(l.a,{className:"mt-3"},a.a.createElement(p.a,{size:"sm"},["SBER","YNDX","VTBR","SNGSP","SBERP","ROSN","NLMK","MTSS","MGNT","MFON","GMKN","GAZP","AFLT","IMOEX"].map((function(r,e){return a.a.createElement(f.a,{variant:"outline-secondary",key:e,onClick:function(){return o(r)}},r)}))),a.a.createElement(s,{arrayOfarrays:x}),a.a.createElement(i.a,{options:P,series:N,type:"scatter"}),a.a.createElement(i.a,{options:D,series:w,type:"area"}))}}}]);
//# sourceMappingURL=37-ccc9f28cd123182e6625.js.map