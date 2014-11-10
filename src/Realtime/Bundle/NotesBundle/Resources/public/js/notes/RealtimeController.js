var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', function ($scope, RealtimeService) {

        $scope.send = function (content) {
            RealtimeService.send(content);
            console.log($scope.notes);
        };
       
        $scope.get = function () {
            RealtimeService.get().then(function(){
                console.log('get:', $scope.notes);
            });
        };

        $scope.notes = RealtimeService.notes;
    }
]);