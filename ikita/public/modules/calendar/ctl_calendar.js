angular.module('calendar').controller('calendarCtrl', function (AuthService, CalendarService, $rootScope, $scope, $http, alertService, $window, $state) {

  $(window).resize(function () {
    $scope.windowWidth = $(window).width();
  });

  if (AuthService.isloggedIn()) {
    $rootScope.isAuth = true;
    $scope.mainGroupid = $rootScope.decodedToken.groupid;
    /*config object */
    $scope.eventSources = [];
    $scope.uiConfig = {
      calendar: {
        lang: 'de',
        height: 750,
        editable: true,
        header: {
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: function () {
          CalendarService.dayClick();
        },
        eventClick: function (event, jsEvent, view) {

          // change the border color just for fun
          $(this).css('border-color', 'blue');
          CalendarService.eventClick(event);
        },
        eventDrop: $scope.alertOnDrop,
        eventResize: function (event, delta, revertFunc) {

          alert(event.title + " end is now " + event.end.format());

          if (!confirm("is this okay?")) {
            revertFunc();
          }
          CalendarService.resizeEvent();
        }
      },
      calendarPad: {
        lang: 'de',
        height: 455,
        editable: true,
        header: {
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: function () {
          CalendarService.dayClick();
        },
        eventClick: function (event, jsEvent, view) {

          // change the border color just for fun
          $(this).css('border-color', 'blue');
          CalendarService.eventClick(event);
        },
        eventDrop: $scope.alertOnDrop,
        eventResize: function (event, delta, revertFunc) {

          alert(event.title + " end is now " + event.end.format());

          if (!confirm("is this okay?")) {
            revertFunc();
          }
          CalendarService.resizeEvent();
        }
      },
      calendarMobile: {
        lang: 'de',
        height: 400,
        editable: true,
        header: {
          left: 'month agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: function () {
          CalendarService.dayClick();
        },
        eventClick: function (event, jsEvent, view) {

          // change the border color just for fun
          $(this).css('border-color', 'blue');
          CalendarService.eventClick(event);
        },
        eventDrop: $scope.alertOnDrop,
        eventResize: function (event, delta, revertFunc) {

          alert(event.title + " end is now " + event.end.format());

          if (!confirm("is this okay?")) {
            revertFunc();
          }
          CalendarService.resizeEvent();
        }
      }
    };

    var i;

    $http({
      method: "GET",
      url: "calendar/getEventsByGroup/" + $rootScope.decodedToken.groupid
    }).then(function mySuccess(response) {
      if (response.data == null) {
        console.log(response.statusText);
      } else {
        var eventsByGroup = [];
        for (i = 0; i < response.data.length; i++) {
          eventsByGroup.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            color: response.data[i].color,
            textColor: response.data[i].textColor,
            start: response.data[i].start,
            end: response.data[i].end,
            className: response.data[i].users
          });
        }
        $rootScope.eventsByGroup = eventsByGroup;
        $scope.eventSources.push({ events: $rootScope.eventsByGroup });

      }
    }, function myError(error) {
      console.log(error.statusText);
    });

    //Load Groups
   
    $scope.Groups = [];
    $http({
      method: "GET",
      url: "kita/group/searchId/" + $rootScope.decodedToken.kitaid
    }).then(function mySuccess(response) {
      for (i = 0; i < response.data.length; i++) {
        $scope.Groups.push({ _id: response.data[i]._id, groupname: response.data[i].groupname });
      }
    }, function myError(error) {
      console.log(error.statusText);
    });
  } else {
    $state.go('login');
  }



  $scope.loadEventsGroup = function (groupid) {
    var eventsByGroup = [];
    var i;
    $http({
      method: "GET",
      url: "calendar/getEventsByGroup/" + groupid
    }).then(function mySuccess(response) {
      if (response.data == null) {
        console.log(response.statusText);
      } else {

        for (i = 0; i < response.data.length; i++) {
          eventsByGroup.push({
            id: response.data[i]._id,
            title: response.data[i].title,
            color: response.data[i].color,
            textColor: response.data[i].textColor,
            start: response.data[i].start,
            end: response.data[i].end,
            className: response.data[i].users
          }
          );

        }
        $rootScope.eventsByGroup = eventsByGroup
        $scope.eventSources = [null];
        $scope.eventSources.push({ events:  $rootScope.eventsByGroup});
      }

    }, function myError(error) {
      console.log(error.statusText);
    });
  }

  $scope.isLogAdmin = function () {
    if (AuthService.isloggedIn()) {
      if ($rootScope.decodedToken.usertype == 1) {
        return true;
      }
    } else {
      return false;
    }
  }
});