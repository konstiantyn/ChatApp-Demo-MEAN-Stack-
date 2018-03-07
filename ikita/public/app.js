//root module
var app = angular.module('iKita', ['ui.router', 'ui.calendar', 'user', 'login', 'kita', 'modal', 'calendar']);

//user module
angular.module('user', []);

//login module
angular.module('login', []);

//kita module
angular.module('kita', []);

//Modal module
angular.module('modal', []);

//Calendar module
angular.module('calendar', []);