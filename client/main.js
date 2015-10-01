(function() {
	'use strict';

	var AppView = require('./app/views/masterView'),
		Router = require('./app/router/router'),
		Core = require('./app/utils/core');

	var app = Core.create({}, 'AppView', AppView);
	app.render();

	Router.initialize({
		appView: app
	});

})();