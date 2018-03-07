angular.module('kita').controller('kitaCtrl', function (AuthService, $rootScope, $scope, $http, alertService, $window, $state) {

    if (AuthService.isloggedIn()) {
        $rootScope.isAuth = true;
     } else {
         $state.go('login');
     }

    $scope.edit = function () {
        $http({
            method: "PUT",
            url: "/kita/editKita",
            data: {
                "_id": $scope.kitaid,
                "kitaname": $scope.kitaname,
                "description": $scope.kitaDescription,
                "telefon": $scope.kitaTelefon,
                "email": $scope.kitaEmail,
                "ort": $scope.kitaOrt,
                "kanton": $scope.kitaKanton,
                "plz": $scope.kitaPlz,
                "address": $scope.kitaAddress
            }
        }).then(function mySuccess(response) {
            $rootScope.refreshedSite = 'kita';
            $state.go('sync');
            alertService.showNotificationSuccesUpdate();
        }, function myError(response) {
            alertService.showNotificationErrorUpdate();
        });
    }

});