var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', function ($scope, RealtimeService) {

        $scope.notesCollection = [];
        
        $scope.send = function (content) {
            RealtimeService.send(content);
        };

        $scope.get = function () {
            RealtimeService.get();
            $scope.notes = RealtimeService.getCollection();
            console.log($scope.notes);

        };
        $scope.get();
        $scope.notes = RealtimeService.notes;
//        console.log($scope.notes);
    }
]);