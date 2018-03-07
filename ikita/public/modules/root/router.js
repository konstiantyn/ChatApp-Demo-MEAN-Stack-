var app = angular.module('iKita').config(function ($stateProvider) {

  // ------------------------------------------------------------------
  //Admin Routes
  // ------------------------------------------------------------------

  var startState = {
    name: 'start',
    url: '/start',
    template: '<h3>Admin Start!</h3>'
  }

  var calendarState = {
    name: 'kalender',
    url: '/kalender',
    templateUrl: "modules/calendar/calendar_view/calendar.html"
  }

  var planungState = {
    name: 'planung',
    url: '/planung',
    template: '<h3>Admin Planung!</h3>'
  }

  var kinderState = {
    name: 'kinder',
    url: '/kinder',
    templateUrl: "modules/kita/kinder_view/kinder_view.html"
  }

  var kitaState = {
    name: 'kita',
    url: '/kita',
    templateUrl: "modules/kita/kita_view/kita_view.html"
  }

  $stateProvider.state(startState);
  $stateProvider.state(calendarState);
  $stateProvider.state(planungState);
  $stateProvider.state(kinderState);
  $stateProvider.state(kitaState);


  // ------------------------------------------------------------------
  // Neutral Routes
  // ------------------------------------------------------------------

  var profilState = {
    name: 'profil',
    url: '/profil',
    templateUrl: "modules/user/profil_view/profil_view.html"
  }
  var profilSynState = {
    name: 'sync',
    url: '/sync',
    templateUrl: "modules/root/refreshed_view.html"
  }

  var searchState = {
    name: 'search',
    url: '/search',
    template: '<h3>search!</h3>'
  }

  var notificationState = {
    name: 'notification',
    url: '/notification',
    template: '<h3>notification!</h3>'
  }

  $stateProvider.state(profilState);
  $stateProvider.state(profilSynState);
  $stateProvider.state(searchState);
  $stateProvider.state(notificationState);


  // ------------------------------------------------------------------
  //User Routes
  // ------------------------------------------------------------------

  var startUserState = {
    name: 'startUser',
    url: '/Start-User',
    template: '<h3>User Start!</h3>'
  }

  var calendarUserState = {
    name: 'kalenderUser',
    url: '/Kalender-User',
    templateUrl: "modules/calendar/calendar_view/calendar.html"
  }

  var kitaUserState = {
    name: 'kitaUser',
    url: '/Kita-Info',
    templateUrl: "modules/kita/kita_view/kita_user_view.html"
  }

  $stateProvider.state(startUserState);
  $stateProvider.state(calendarUserState);
  $stateProvider.state(kitaUserState);

});