exports.ids = [372];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-tap.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.tap = {
	fail: /not ok[^#{\n\r]*/,
	pass: /ok[^#{\n\r]*/,
	pragma: /pragma [+-][a-z]+/,
	bailout: /bail out!.*/i,
	version: /TAP version \d+/i,
	plan: /\d+\.\.\d+(?: +#.*)?/,
	subtest: {
		pattern: /# Subtest(?:: .*)?/,
		greedy: true
	},
	punctuation: /[{}]/,
	directive: /#.*/,
	yamlish: {
		pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
		lookbehind: true,
		inside: Prism.languages.yaml,
		alias: 'language-yaml'
	}
};


/***/ })

};;
//# sourceMappingURL=372.render-page.js.map