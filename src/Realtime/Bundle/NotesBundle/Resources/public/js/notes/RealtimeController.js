var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', 'Pusher', 'growl', function ($scope, RealtimeService, Pusher, growl) {

        Pusher.subscribe('realTimeChannel1', 'saveEvent', function (item) {
            growl.success("Dodaną nową notatkę:" + item);
        });
        $scope.send = function (content) {
            RealtimeService.send(content);
        };

        $scope.get = function () {
            RealtimeService.get().then(function () {
                console.log('get:', $scope.notes);
            });
        };

        $scope.notes = RealtimeService.notes;
    }
]);