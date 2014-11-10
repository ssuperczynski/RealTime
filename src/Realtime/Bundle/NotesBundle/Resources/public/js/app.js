var app = angular.module('realtime', ['doowb.angular-pusher', 'angular-growl']);

app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);

app.config(['PusherServiceProvider', function(PusherServiceProvider) {
        PusherServiceProvider
            .setToken('aeffa086e9b34a265837')
            .setOptions({});
    }
]);