var app = angular.module('realtime');

app.controller('realtimeController', ['$scope', 'RealtimeService', function ($scope, RealtimeService) {
        

        $scope.send = function (content) {

//            var pusher = new Pusher({
//                appId: 96028,
//                key: 'aeffa086e9b34a265837',
//                secret: 'fc5903c8eac6c91b41af'
//            });

//            pusher.trigger('my-channel', 'my-event', {"message": "To działa - niemożliwe i to w JS!!!!!!! O kurwa!!!"});
            
//            $scope.pusher = new Pusher('aeffa086e9b34a265837');
//            $scope.channel = pusher.subscribe('my-channel');
            RealtimeService.send(content);
            console.log($scope.notes);
        };

        $scope.get = function () {
            RealtimeService.get().then(function () {
                console.log('get:', $scope.notes);
            });
        };

        $scope.notes = RealtimeService.notes;
    }
]);