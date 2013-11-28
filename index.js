var apuokasApp = angular.module('apuokasApp', ['ngRoute', 'apuokasAppCtrl']);

apuokasApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);

var apuokasAppCtrl = angular.module('apuokasAppCtrl', [], function(){});