angular.module('login').controller('loginCtrl', function ($scope, AuthService) {

    $scope.login = function () {

        AuthService.login($scope.username, $scope.password);

    }

});