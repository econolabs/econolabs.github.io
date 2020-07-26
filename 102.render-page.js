exports.ids = [102];
exports.modules = {

/***/ "./node_modules/prismjs/components/prism-erb.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.erb = Prism.languages.extend('ruby', {});
	Prism.languages.insertBefore('erb', 'comment', {
		'delimiter': {
			pattern: /^<%=?|%>$/,
			alias: 'punctuation'
		}
	});

	Prism.hooks.add('before-tokenize', function(env) {
		var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'erb', erbPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb');
	});

}(Prism));


/***/ })

};;
//# sourceMappingURL=102.render-page.js.map