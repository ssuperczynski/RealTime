var app = angular.module('realtime');

app.controller('realtimeController', ['$scope','RealtimeService', function ($scope, RealtimeService) {
        $scope.send = function () {
            alert('It works');
            //RealtimeService.getTimeline();
        };
    }
]);