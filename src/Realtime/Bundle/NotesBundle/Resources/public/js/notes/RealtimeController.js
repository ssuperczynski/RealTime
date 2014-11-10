var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', function ($scope, RealtimeService) {

        $scope.send = function (content) {
            RealtimeService.send(content);
        };
       
        $scope.get = function () {
            RealtimeService.get().then(function(){
                console.log('get', $scope.notes.data);
            });


        };

        $scope.notes = RealtimeService.notes;
    }
]);