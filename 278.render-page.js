exports.ids = [278];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-php-extras.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.insertBefore('php', 'variable', {
	'this': /\$this\b/,
	'global': /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
	'scope': {
		pattern: /\b[\w\\]+::/,
		inside: {
			keyword: /static|self|parent/,
			punctuation: /::|\\/
		}
	}
});

/***/ })

};;
//# sourceMappingURL=278.render-page.js.map