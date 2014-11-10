'use strict';

var app = angular.module('realtime');

app.factory('RealtimeFactory', ['$resource', 'API_END_POINT', function ($resource, API_END_POINT) {
        return null;
//        $resource(API_END_POINT + 'index/:recruitmentId/:applicationId', null,
//                {
//                    'get': {method: 'GET', isArray: true},
//                    'set': {method: 'POST', url: API_END_POINT + 'timeline'}
//                });
    }]
        );