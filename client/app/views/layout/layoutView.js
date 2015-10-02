(function() {
    'use strict';

    var Backbone = require('backbone');

    var LayoutView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            console.log("Log: Layout view got initialize");
            this.render();
        },

        render: function() {
            return this;
        }
    });

    exports.init = function() {
        new LayoutView();
    };

})();