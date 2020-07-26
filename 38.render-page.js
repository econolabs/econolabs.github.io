exports.ids = [38];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-bbcode.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bbcode.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bbcode = {
	'tag': {
		pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
		inside: {
			'tag': {
				pattern: /^\[\/?[^\s=\]]+/,
				inside: {
					'punctuation': /^\[\/?/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\]/,
			'attr-name': /[^\s=\]]+/
		}
	}
};

Prism.languages.shortcode = Prism.languages.bbcode;

/***/ })

};;
//# sourceMappingURL=38.render-page.js.map