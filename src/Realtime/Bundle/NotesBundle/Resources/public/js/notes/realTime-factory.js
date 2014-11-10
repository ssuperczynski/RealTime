//app.factory('realtimeFactory', function(){
//   alert('service');
//});
'use strict';

app.factory('TimelineFactory', ['$resource', 'API_END_POINT', function ($resource, API_END_POINT) {
    return $resource(API_END_POINT + 'timeline/:recruitmentId/:applicationId', null,
        {
            'get': { method: 'GET', isArray: true },
            'set': { method: 'POST', url: API_END_POINT + 'timeline' },
            'group': {
                method: 'POST',
                data: {
                    ids: '@ids',
                    status: '@status',
                    recruitment: "@recruitmentId"
                },
                url: API_END_POINT + 'timeline/group'
            }
        });
}]);