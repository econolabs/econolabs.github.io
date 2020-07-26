exports.ids = [92];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-ebnf.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ebnf.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.ebnf = {
	'comment': /\(\*[\s\S]*?\*\)/,
	'string': {
		pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
		greedy: true
	},
	'special': {
		pattern: /\?[^?\r\n]*\?/,
		greedy: true,
		alias: 'class-name'
	},

	'definition': {
		pattern: /^(\s*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
		lookbehind: true,
		alias: ['rule', 'keyword']
	},
	'rule': /[a-z]\w*(?:[ \t]+[a-z]\w*)*/i,

	'punctuation': /\([:/]|[:/]\)|[.,;()[\]{}]/,
	'operator': /[-=|*/!]/
};


/***/ })

};;
//# sourceMappingURL=92.render-page.js.map