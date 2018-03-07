angular.module('calendar').service('CalendarService', function ($window, $http, $state, $rootScope, alertService) {

    this.resizeEvent = function () {

    };

    this.dayClick = function () {
        $rootScope.modalTitle = "Neues Event hinzufügen";
        $rootScope.modalSuccesBtn = "Bestätigen"
        $rootScope.modalLink = "newEvent";
        $('#Modal').modal('show');
    }

    this.eventClick = function (event) {
        $rootScope.modalTitle = "Event bearbeiten";
        $rootScope.modalSuccesBtn = "Bestätigen"
        $rootScope.eventName = event.title;
        //Start
        var date = moment(event.start);
        var dateComponentStart = date.utc().format('DD.MM.YYYY');
        var timeComponentStart = date.utc().format('HH:mm');
        $rootScope.startDate = dateComponentStart;
        $rootScope.startTime = timeComponentStart;

        //Ende
        var date = moment(event.end);
        var dateComponentEnd = date.utc().format('DD.MM.YYYY');
        var timeComponentEnd = date.utc().format('HH:mm');
        $rootScope.endDate = dateComponentEnd;
        $rootScope.endTime = timeComponentEnd;

        $rootScope.eventId = event.id;

        $rootScope.eventEnd2 = event.start;


        $rootScope.modalLink = "editEvent";
        $('#Modal').modal('show');
    }

});