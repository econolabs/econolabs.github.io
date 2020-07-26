exports.ids = [369];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-t4-templating.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-t4-templating.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(n){function i(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}n.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(e){var t=n.languages[e],a="language-"+e;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:i("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:i("=",t,a),"class-feature":i("\\+",t,a),standard:i("",t,a)}}}}})}(Prism);

/***/ })

};;
//# sourceMappingURL=369.render-page.js.map