(function() {
    'use strict';

    var Backbone = require('backbone');

    var DashboardView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            console.log("Log: Dashboard view got initialize");
            this.render();
        },

        render: function() {
            return this;
        }
    });

    exports.init = function() {
        new DashboardView();
    };

})();