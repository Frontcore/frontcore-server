(function() {
	'use strict';

	var Backbone = require('backbone'),
		Core = require('../utils/core');

	var AppRouter = Backbone.Router.extend({

		initialize: function() {
			this.listenTo(Events, 'page:navigate', this.navigatePage);
		},

		navigatePage: function(navigationData) {
			this.navigate(navigationData.path, navigationData.options);
		},

		routes: {
			'': 'home',
			'home': 'home',
			'about': 'about'
		}
	});

	exports.initialize = function(options) {
		var appView = options.appView;
		var router = new AppRouter(options);

		router.on('route:home', function() {
			var Page = require('../views/layoutView');
			Core.create(appView, 'Page', Page);
		});

		router.on('route:about', function() {
			require(['views/aboutView'], function(AboutPage) {
				Core.create(appView, 'AboutPage', AboutPage);
			});
		});

		Backbone.history.start();
	};

})();