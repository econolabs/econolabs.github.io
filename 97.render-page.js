exports.ids = [97];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ejs.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ejs.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(a){a.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:a.languages.javascript}},a.hooks.add("before-tokenize",function(e){a.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"ejs")})}(Prism);

/***/ })

};;
//# sourceMappingURL=97.render-page.js.map