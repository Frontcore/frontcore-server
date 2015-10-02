(function() {
    'use strict';

    var Backbone = require('backbone');

    var AboutView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            console.log("Log: About view got initialize");
            this.render();
        },

        render: function() {
            return this;
        }
    });

    exports.init = function() {
        new AboutView();
    };

})();