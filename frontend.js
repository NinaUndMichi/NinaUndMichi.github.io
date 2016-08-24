/**************************************************************************************************
 * app.js
 * Iniziert das Root Module der Anwendung
 * und lädt alle weitern Module
 **************************************************************************************************/
angular.module('nimi', ['allControllers', 'allDirectives']);

/**
 * cfAllControllers.js
 * Injiziert die einzelnen Controller in das Controllers.all Modul.
 * Diese wird wiederum in der app.js eingebunden.
 */
angular.module('allControllers', [
    'cfMainCtrl',
]);

// cfMainCtrl.js ----------------------------------------------------------
angular.module('cfMainCtrl', []).controller('cfMainCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

    $scope.files = [
        'https://saschablob.blob.core.windows.net/images/IMG_0003.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0005.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0006%201.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0006.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0007.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0008.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0009.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0010%201.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0010.JPG',
        'https://saschablob.blob.core.windows.net/images/IMG_0011%201.JPG'
    ];
}]);
;

/**
 * cfAllDirectives
 * Injiziert die einzelnen Directives in das Directives.all Modul.
 * Diese wird wiederum in der app.js eingebunden.
 */
angular.module('allDirectives', ['ngRoute', 'jtt_angular_xgallerify'])