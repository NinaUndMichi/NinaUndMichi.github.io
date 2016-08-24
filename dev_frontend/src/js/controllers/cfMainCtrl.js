// cfMainCtrl.js ----------------------------------------------------------
angular.module('cfMainCtrl', []).controller('cfMainCtrl', ['$scope','$http', '$location', '$routeParams', function ($scope,$http, $location, $routeParams) {


    $scope.files = [];

    $scope.getFiles = function(){
        $http({
            method: 'GET',
            url: '/api/getFiels',
        }).success(function (data) {
            console.log("getFiles success", data);
            $scope.files = data;
        }).error(function (err) {
            // deferred.reject(err);
        });
    }();






    // $scope.main = {
    //     filterRules: {},
    //     produktKategorie: null
    // };
    //
    // $scope.toggle = {
    //     menu_window: false,
    // };
    //
    // /*********************************************************
    //  *Eventlistener, wenn auf eine neue Seite gewechselt wurde
    //  *********************************************************/
    // $scope.$on('$routeChangeSuccess', function (next, current) {
    //     $scope.scrollToTop();
    // });
    //
    // /*********************************************************
    //  *Scrollt die Seite nach oben o. zu einem #
    //  *********************************************************/
    // $scope.scrollToTop = function () {
    //     $('html,body').animate({scrollTop: 0}, 'slow');
    //     $scope.toggle.menu_window = false;
    // };
    //
    // /*********************************************************
    //  * Öffnet Kontaktformular und übergibt Kategorie und Filterregeln
    //  *********************************************************/
    // $scope.openContactForm = function (category, rules) {
    //     $scope.toggle.menu_window = false;
    //
    //     var modalInstance = $uibModal.open({
    //         animation: true,
    //         templateUrl: 'html/Unterseiten/Kontakt.html',
    //         controller: 'cfKontaktCtrl',
    //         size: 'lg',
    //         resolve: {
    //             items: function () {
    //                 return $scope.items;
    //             },
    //             category: function () {
    //                 if (category) {
    //                     return category.replace("/", "");
    //                 } else {
    //                     return undefined;
    //                 }
    //             },
    //             rules: function () {
    //                 return rules;
    //             }
    //         }
    //     });
    //
    //     modalInstance.result.then(function (selectedItem) {
    //         console.log("Kontakt mit Angaben geschlossen");
    //     }, function () {
    //         console.log("Kontakt ohne Angaben geschlossen");
    //     });
    // };

}]);