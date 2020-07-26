exports.ids = [106];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-etlua.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-etlua.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.etlua = {
		'delimiter': {
			pattern: /^<%[-=]?|-?%>$/,
			alias: 'punctuation'
		},
		'language-lua': {
			pattern: /[\s\S]+/,
			inside: Prism.languages.lua
		}
	};

	Prism.hooks.add('before-tokenize', function (env) {
		var pattern = /<%[\s\S]+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'etlua', pattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'etlua');
	});

}(Prism));


/***/ })

};;
//# sourceMappingURL=106.render-page.js.map