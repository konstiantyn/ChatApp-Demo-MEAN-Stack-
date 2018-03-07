angular.module('iKita').service('alertService', function () {

    this.showNotificationSuccesLogin = function () {

        $.notify({
            icon: "pe-7s-smile",
            message: "Wilkommen zurück! Sie haben sich erfolgreich angemeldet."
        }, {
                type: 'success',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationInfoLogout = function () {

        $.notify({
            icon: "pe-7s-left-arrow",
            message: "Sie haben sich erfolgreich abgemeldet."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationErrorLogin = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Benutzername/Passwort sind nicht korrekt!"
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }


    this.showNotificationSuccesRegister = function (username) {

        $.notify({
            icon: "pe-7s-check",
            message: "Der Benutzer " + username + " wurde erfolgreich registriert."
        }, {
                type: 'success',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }


    this.showNotificationErrorRegister = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Ein Fehler ist aufgetreten! Der Benutzer konnte nicht registriert werden, bitte überprüfen Sie Ihre Angaben."
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationSuccesUpdate = function () {

        $.notify({

            icon: "pe-7s-check",
            message: "Die Kita-Daten wurden erfolgreich aktualisiert."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationErrorUpdate = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Ein Fehler ist beim Updaten der Daten aufgetreten!"
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationSuccesEditUser = function (username) {

        $.notify({

            icon: "pe-7s-check",
            message: "Der User " + username + " wurden erfolgreich aktualisiert."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationErrorEditUser = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Ein Fehler ist beim Editieren des Users aufgetreten!"
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }


    this.showNotificationSuccesUserDelete = function (username) {

        $.notify({

            icon: "pe-7s-check",
            message: "Der User " + username + " wurden erfolgreich gelöscht."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationErrorUserDelete = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Ein Fehler ist beim Löschen des Users aufgetreten!"
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationSuccesEditProfil = function () {
        $.notify({

            icon: "pe-7s-check",
            message: "Ihr Profil wurden erfolgreich aktualisiert."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }


    this.showNotificationSuccesEditProfilImg = function () {
        $.notify({

            icon: "pe-7s-check",
            message: "Ihr Profilbild wurde erfolgreich aktualisiert."
        }, {
                type: 'info',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }

    this.showNotificationErrorEditProfilImg = function () {

        $.notify({

            icon: "pe-7s-attention",
            message: "Ein Fehler ist beim aktualisieren des Profilbilds aufgetreten!"
        }, {
                type: 'danger',
                timer: 2000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }



});