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

app.config(['growlProvider', function(growlProvider) {
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalTimeToLive({
        success: 2000,
        error: 3000,
        warning: 3000,
        info: 3000
    });
}]);