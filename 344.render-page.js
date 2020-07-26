exports.ids = [344];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-smalltalk.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-smalltalk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.smalltalk = {
	'comment': /"(?:""|[^"])*"/,
	'character': {
		pattern: /\$./,
		alias: 'string'
	},
	'string': /'(?:''|[^'])*'/,
	'symbol': /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
	'block-arguments': {
		pattern: /(\[\s*):[^\[|]*\|/,
		lookbehind: true,
		inside: {
			'variable': /:[\da-z]+/i,
			'punctuation': /\|/
		}
	},
	'temporary-variables': {
		pattern: /\|[^|]+\|/,
		inside: {
			'variable': /[\da-z]+/i,
			'punctuation': /\|/
		}
	},
	'keyword': /\b(?:nil|true|false|self|super|new)\b/,
	'number': [
		/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
		/\b\d+(?:\.\d+)?(?:e-?\d+)?/
	],
	'operator': /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
	'punctuation': /[.;:?\[\](){}]/
};


/***/ })

};;
//# sourceMappingURL=344.render-page.js.map