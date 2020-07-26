exports.ids = [103];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-erb.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(n){n.languages.erb=n.languages.extend("ruby",{}),n.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),n.hooks.add("before-tokenize",function(e){n.languages["markup-templating"].buildPlaceholders(e,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)}),n.hooks.add("after-tokenize",function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"erb")})}(Prism);

/***/ })

};;
//# sourceMappingURL=103.render-page.js.map