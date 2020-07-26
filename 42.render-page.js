exports.ids = [42];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-bnf.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bnf.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bnf = {
	'string': {
		pattern: /"[^\r\n"]*"|'[^\r\n']*'/
	},
	'definition': {
		pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
		alias: ['rule', 'keyword'],
		inside: {
			'punctuation': /^<|>$/
		}
	},
	'rule': {
		pattern: /<[^<>\r\n\t]+>/,
		inside: {
			'punctuation': /^<|>$/
		}
	},
	'operator': /::=|[|()[\]{}*+?]|\.{3}/
};

Prism.languages.rbnf = Prism.languages.bnf;


/***/ })

};;
//# sourceMappingURL=42.render-page.js.map