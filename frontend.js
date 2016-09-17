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
    'cfMainCtrl'
]);

// cfMainCtrl.js ----------------------------------------------------------
angular.module('cfMainCtrl', []).controller('cfMainCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

    $scope.login = function(pw){
        if(pw && pw =="06082016"){
            $scope.loginStatus= true;
        }else{
            $scope.errorMessage = "Passwort falsch."
        }
    };

    $scope.files = [
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-1.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-10.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-11.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-12.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-13.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-14.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-15.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-16.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-17.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-18.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-100.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-101.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-102.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-103.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-104.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-105.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-106.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-107.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-108.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-109.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-110.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-111.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-112.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-113.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-114.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-115.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-116.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-117.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-118.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-119.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-120.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-121.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-122.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-123.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-124.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-125.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-126.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-127.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-128.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-129.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-130.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-131.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-132.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-133.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-134.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-135.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-136.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-137.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-138.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-139.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-140.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-141.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-142.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-143.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-144.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-145.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-146.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-147.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-148.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-149.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-150.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-151.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-152.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-153.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-154.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-155.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-156.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-157.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-158.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-159.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-160.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-161.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-162.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-163.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-164.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-165.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-166.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-167.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-168.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-169.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-170.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-171.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-172.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-173.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-174.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-175.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-176.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-177.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-178.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-179.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-180.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-181.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-182.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-183.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-184.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-185.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-186.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-187.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-188.jpg',
        'https://saschablob.blob.core.windows.net/images/N%2BM%20Hochzeit-189.jpg'
    ];
}]);
;

/**
 * cfAllDirectives
 * Injiziert die einzelnen Directives in das Directives.all Modul.
 * Diese wird wiederum in der app.js eingebunden.
 */
angular.module('allDirectives', ['ngRoute', 'ngFlowGrid'])