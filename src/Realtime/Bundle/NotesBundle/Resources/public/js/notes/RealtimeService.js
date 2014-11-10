'use strict';
var app = angular.module('realtime');

app.service('RealtimeService', ['RealtimeFactory', function (RealtimeFactory) {

//    var getTimeline = function (recruitmentId, applicationId) {
//        return RealtimeFactory.get({ recruitmentId: recruitmentId, applicationId: applicationId }).$promise
//            .then(function (response) {
//                angular.copy(response, self.notes);
//            });
//    };

    var getTimeline = function () {
        alert('dsd');
    }

    var addToTimeline = function (data) {
            RealtimeFactory.set({
            recruitmentId: data.recruitmentId,
            messageType: data.messageType,
            newNote: data.newNote,
            file: data.file ? data.file.id : null,
            applicationId: data.applicationId
        }).$promise.then(function (response) {
            self.notes.unshift({
                id: response.id,
                createdBy: response.createdBy,
                event_date: moment().format("YYYY-MM-DD HH:mm"),
                recruitment: data.recruitmentId,
                type: data.messageType,
                value: data.newNote,
                file_id: data.file ? data.file.path : null,
                file_name: data.file ? data.file.name : '',
                candidate: response.candidate,
                candidate_id: response.candidate_id,
                application: response.application,
                label: response.label
            });

        });
    };

    var self = {
        getTimeline: getTimeline,
        addToTimeline: addToTimeline,
        notes: []
    };

    return self;

}]);


//servis manipulowanie kolekcjami
//faktory put. post/ patch
//faktory zawsze w serwisie