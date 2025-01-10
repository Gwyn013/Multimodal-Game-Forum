'use strict';

define('admin/plugins/global-tags', ['settings', 'alerts'], function (Settings, alerts) {
	var admin = {};

	admin.init = function () {
		Settings.load('global-tags', $('.iframely-settings'), function() {
			console.log('settings loadded')
		});

		$('#save').on('click', function() {
			Settings.save('global-tags', $('.iframely-settings'), function() {
				alerts.alert({
					type: 'success',
					alert_id: 'iframely-saved',
					title: 'Settings Saved',
					message: 'You will be able to see the updated tags in each category',
				});
			});
		});
	}

	return admin;
});