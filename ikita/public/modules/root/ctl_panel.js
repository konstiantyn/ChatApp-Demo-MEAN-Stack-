angular.module('iKita').controller('panelCtrl', function($scope, AuthService, $window) {
    $scope.isLog = function(){
        if(AuthService.isloggedIn()){
            return true;
        }else{
            return false;
        }
    }

    $scope.logout = function(){
        AuthService.logout();
    }
});