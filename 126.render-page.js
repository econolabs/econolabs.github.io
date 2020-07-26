exports.ids = [126];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-gedcom.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-gedcom.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.gedcom = {
	'line-value': {
		// Preceded by level, optional pointer, and tag
		pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
		lookbehind: true,
		inside: {
			'pointer': {
				pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
				alias: 'variable'
			}
		}
	},
	'tag': {
		// Preceded by level and optional pointer
		pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
		lookbehind: true,
		alias: 'string'
	},
	'level': {
		pattern: /(^\s*)\d+/m,
		lookbehind: true,
		alias: 'number'
	},
	'pointer': {
		pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
		alias: 'variable'
	}
};

/***/ })

};;
//# sourceMappingURL=126.render-page.js.map