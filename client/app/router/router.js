(function() {
	'use strict';

	var Backbone = require('backbone');

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'home',
			'home': 'home',
			'about': 'about',
			'login': 'login',
			'dashboard': 'dashboard'
		}
	});

	exports.init = function(options) {
		var router = new AppRouter(options);

		router.on('route:home', function() {
			var LayoutView = require('../views/layout/layoutView');
			LayoutView.init();
		});

		router.on('route:about', function() {
			var AboutView = require('../views/product/aboutView');
			AboutView.init();
		});

		router.on('route:login', function() {
			var LoginView = require('../views/auths/loginView');
			LoginView.init();
		});

		router.on('route:dashboard', function() {
			var DashboardView = require('../views/dashboard/dashboardView');
			DashboardView.init();
		});

		Backbone.history.start();
	};

})();