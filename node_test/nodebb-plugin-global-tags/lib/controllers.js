'use strict';

const categories = require.main.require('./src/categories');
var Controllers = {};

Controllers.renderAdminPage = async function (req, res, next) {
	/*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/
	const tags = await categories.getTagWhitelist([1]);

	res.render('admin/plugins/global-tags', {
		title: 'Global Tags',
		tags,
	});
};

module.exports = Controllers;