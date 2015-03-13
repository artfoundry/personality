'use strict';

angular.module('personality.service', [])
    .service('sharedResults', function () {
        var results = {
            "genius": 0,
            "boring": 0,
            "creative": 0
        };

        return {
            getResults: function () {
                return results;
            },
            setResults: function(key) {
                results[key] += 1;
            }
        };
    });