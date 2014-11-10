'use strict';
var app = angular.module('realtime');

app.service('RealtimeService', ['RealtimeFactory', function (RealtimeFactory) {

        var send = function (data) {
            RealtimeFactory.set({
                createdBy: 'admin',
                note: data,
                datetime: moment().format("YYYY-MM-DD HH:mm")
            }).then(function (response) {
                self.notes.unshift({
                    id: response.id,
                    createdBy: 'Adm',
                    note: 'To działa...?!',
                    createdDate: moment().format("YYYY-MM-DD HH:mm")
                });
            });
        };
        
        var get = function () {
            return RealtimeFactory.get().then(
                function (response) {
                    angular.copy(response.data, self.notes );
            });
        };

        var self = {
            send: send,
            get: get,
            notes: []
        };

        return self;

    }]);


//servis manipulowanie kolekcjami
//faktory put. post/ patch
//faktory zawsze w serwisie