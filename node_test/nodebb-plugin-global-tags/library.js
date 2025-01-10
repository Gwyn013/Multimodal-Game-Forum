"use strict";

var controllers = require('./lib/controllers');
var categories = require.main.require('./src/categories');
var utils = require.main.require('./src/utils');
var winston = require.main.require('winston');
var meta = require.main.require('./src/meta');
var db = require.main.require('./src/database');
const cache = require.main.require('./src/cache');

var postCache = require.main.require('./src/posts/cache');

var globalTags = {
	config: undefined,
	apiBase: 'http://iframe.ly/api/iframely?origin=nodebb&align=left',
	htmlRegex: /(?:<p[^>]*>|<br\s*\/?>|^)<a.+?href="(.+?)".*?>(.*?)<\/a>(?:<br\s*\/?>|<\/p>)?/gm
};
var app;


globalTags.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware;

	app = params.app;

	router.get('/admin/plugins/global-tags', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/global-tags', controllers.renderAdminPage);

	meta.settings.get('global-tags', function(err, config) {
		callback();
	});

	db.init(function(err) {
		if(err){
			console.log("Nodebb could not connect to the database");
		}
	})

	callback();

};

async function setCategoryWhitelist(newTags) {
	const cids = await db.getSortedSetRange('categories:cid', 0, -1);

	cids.forEach(cid => {
		console.log(newTags);
		const update = updateTagWhitelist(cid,newTags);
	});
 
}

async function updateTagWhitelist(cid, tags) {
	tags = tags.split(',').map(tag => utils.cleanUpTag(tag, meta.config.maximumTagLength))
		.filter(Boolean);
	await db.delete(`cid:${cid}:tag:whitelist`);
	const scores = tags.map((tag, index) => index);
	await db.sortedSetAdd(`cid:${cid}:tag:whitelist`, scores, tags);
	cache.del(`cid:${cid}:tag:whitelist`);
}


globalTags.updateConfig = function(data) {
	if (data.plugin === 'global-tags') {
		winston.verbose('[plugin/global-tags] Config updated');
		postCache.reset();
		meta.config.tags = data.settings.cacheMaxAgeDays.split(',');
		setCategoryWhitelist(data.settings.cacheMaxAgeDays);
	}
};

globalTags.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/global-tags',
		icon: 'fa-link',
		name: 'global-tags'
	});

	callback(null, header);
};

module.exports = globalTags;
