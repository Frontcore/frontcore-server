(function() {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone');

    var Frontcore = Backbone.View.extend({

        el: 'body',

        initialize: function() {
            this.xhrStatusHandler();
            this.render();
        },

        xhrStatusHandler: function() {
            $.ajaxSetup({
                statusCode: {
                    403: function() {
                        return false;
                    }
                }
            });
        },

        render: function() {
            return this;
        }
    });
    
    new Frontcore();

})();