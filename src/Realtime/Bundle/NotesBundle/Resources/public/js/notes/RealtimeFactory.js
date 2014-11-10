'use strict';

var app = angular.module('realtime');

app.factory('RealtimeFactory',['$http', function ($http) {

    var baseUrl = 'http://localhost:8000/app_dev.php/realtime/notes';
    var service = {};

    service.set = function (data) {
        alert(baseUrl);
        return $http.post(baseUrl,data);
    }
    
    service.get = function () {
        alert(baseUrl);
        return $http.get(baseUrl,[]);
    }

    return service;

}]);