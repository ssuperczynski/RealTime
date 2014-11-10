'use strict';
var app = angular.module('realtime');

app.service('RealtimeService', ['RealtimeFactory', function (RealtimeFactory) {

//    var getTimeline = function (recruitmentId, applicationId) {
//        return RealtimeFactory.get({ recruitmentId: recruitmentId, applicationId: applicationId }).$promise
//            .then(function (response) {
//                angular.copy(response, self.notes);
//            });
//    };

        var getCollection = function () {
            return self.notes;
        };

        var send = function (data) {
            RealtimeFactory.set({
                createdBy: 'admin',
                note: data,
                datetime: moment().format("YYYY-MM-DD HH:mm")
            }).$promise.then(function (response) {
                self.notes.unshift({
                    id: response.id,
                    createdBy: response.createdBy,
                    note: response.note,
                    datetime: moment().format("YYYY-MM-DD HH:mm")
                });

            });
        };

        var self = {
            getCollection: getCollection,
            send: send,
            notes: []
        };

        return self;

    }]);


//servis manipulowanie kolekcjami
//faktory put. post/ patch
//faktory zawsze w serwisie