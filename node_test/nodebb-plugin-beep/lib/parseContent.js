'use strict';

// var isLatin = /^\w+$/;
var isLatin = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;

function parseContent(content, banned_words, banned_urls, censorWholeWord, symbol) {

	if (!content) {
		return content;
	}

	symbol = symbol || '*';

	function censor(match) {
		if (!isLatin.test(match)) {
			return '*';
		}

		var l = match.length;
		// var out = match[0];
    var out = '*';

		var i = l;
		while (i) {
			out += symbol;
			// eslint-disable-next-line no-plusplus
			i--;
		}

		// return out + match[l - 1];
    return out;
	}

	var replacement = censorWholeWord ? '*' : censor;
	return content
		.replace(banned_words, replacement)
		.replace(banned_urls, '[link removed]');
}

module.exports = parseContent;
