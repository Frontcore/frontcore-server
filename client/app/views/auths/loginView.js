(function() {
    'use strict';

    var Backbone = require('backbone');

    var LoginView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            console.log("Log: Login view got initialize");
            this.render();
        },

        render: function() {
            return this;
        }
    });

    exports.init = function() {
        new LoginView();
    };

})();