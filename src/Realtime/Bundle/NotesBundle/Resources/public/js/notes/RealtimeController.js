var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', function ($scope, RealtimeService) {

        $scope.notesCollection = RealtimeService.getCollection();

        $scope.send = function (content) {
            RealtimeService.send(content);
        };
    }
]);