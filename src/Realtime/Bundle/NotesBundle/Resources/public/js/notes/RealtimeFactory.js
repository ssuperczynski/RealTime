'use strict';

var app = angular.module('realtime');

app.factory('RealtimeFactory',['$http', function ($http) {

    var baseUrl = 'http://localhost:8000/app_dev.php/realtime/index';
    var service = {};

    service.set = function (data) {
        alert(baseUrl);
        $http.post(baseUrl,data).sucess(
            function(response, status){
                alert(status);
                return response;
            });
    }

    return service;

}]);