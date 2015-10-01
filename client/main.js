(function() {
	'use strict';

	var AppView = require('./views/masterView'),
		Router = require('./router/router'),
		Core = require('./utils/core');

	var app = Core.create({}, 'AppView', AppView);
	app.render();

	Router.initialize({
		appView: app
	});

})();