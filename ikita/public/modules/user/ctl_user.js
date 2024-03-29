angular.module('user').controller('userCtrl', function (AuthService, $rootScope, $filter, $scope, $http, $state, alertService, $window) {

    if (AuthService.isloggedIn()) {
        $rootScope.isAuth = true;
     } else {
         $state.go('login');
     }

    $rootScope.$on('$viewContentLoaded', function (event, viewConfig) {
        var userObj;
        var groupObj;
        var kitaObj;

        $http({
            method: "GET",
            url: "user/getUserDataById/" + $rootScope.decodedToken.userid
        }).then(function mySuccess(response) {
            if (response.data == null) {
                console.log(response.statusText);
            } else {
                userObj = response.data;

                var array = userObj.address.split("_");

                var street = array[0];
                var house_nr = array[1];

                $scope.username = userObj.username;

                $scope.first_name = userObj.first_name;

                $scope.last_name = userObj.last_name;

                $scope.street = street;

                $scope.house_nr = house_nr;

                $scope.birth_date = new Date(userObj.birth_date);

                $scope.plz = userObj.plz;

                $scope.ort = userObj.ort;

                $scope.email = userObj.email;

                $scope.telefon = userObj.telefon;

                $scope.description = userObj.description;

                $scope.profilPathImg = userObj.profilPathImg;

            }

        }, function myError(error) {
            console.log(error.statusText);
        });

        $scope.kitaname = $rootScope.decodedToken.kitaname;

        if ($rootScope.decodedToken.groupname == null) {
            $http({
                method: "GET",
                url: "/kita/group/searchGroupById/" + $rootScope.decodedToken.groupid
            }).then(function mySuccess(response) {
                groupObj = response.data;
                $scope.group = groupObj.groupname;
                $rootScope.decodedToken.groupname = groupObj.groupname;
                $window.sessionStorage.setItem("decodedToken", JSON.stringify($rootScope.decodedToken));
            }, function myError(error) {
                console.log(error.statusText);
            });
        } else {
            $scope.group = $rootScope.decodedToken.groupname;
        }

    });

    $scope.editProfil = function () {
        var address = $scope.street + "_" + $scope.house_nr;
        $http({
            method: "PUT",
            url: "/user/edit",
            data: {
                "username": $scope.username,
                "first_name": $scope.first_name,
                "last_name": $scope.last_name,
                "address": address,
                "plz": $scope.plz,
                "ort": $scope.ort,
                "birth_date": $scope.birth_date,
                "telefon": $scope.telefon,
                "description" : $scope.description,
                "email": $scope.email,
                "groupid": $rootScope.decodedToken.groupid
            }
        }).then(function mySuccess(response) {
            $rootScope.refreshedSite = 'profil';
            $state.go('sync');
            alertService.showNotificationSuccesEditProfil();
        }, function myError(response) {
            console.log(response);
            alertService.showNotificationErrorEditUser();
        });
    }

    $scope.usernameChecker = function () {
        $http({
            method: "GET",
            url: "user/register/" + $scope.username
        }).then(function mySuccess(response) {
            if (response.data == null) {
                $rootScope.isUsername = false;
            } else {
                $rootScope.isUsername = true;
            }
        }, function myError(response) {
            console.log(response.statusText);
        });
    }

    $scope.editProfilPic = function () {
        $rootScope.modalTitle = "Profilbild editieren / hochladen";
        $rootScope.modalSuccesBtn = "Upload abschliessen"
        $rootScope.modalLink = "editProfilPic";
        $rootScope.modalBody = "Bitte wälen Sie ein Bild auf Ihrem Gerät aus, welches Sie als Profilbild hochladen möchten. (Empfohlenes Format: 100x100, 200x200, 300x300)";
        $('#Modal').modal('show');
    }
});