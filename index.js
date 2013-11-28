var apuokasApp = angular.module('apuokasApp', ['ngRoute', 'apuokasAppCtrl']);

apuokasApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            }).
            when('/list', {
                templateUrl: 'views/list.html',
                controller: 'listCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

var apuokasAppCtrl = angular.module('apuokasAppCtrl', [], function(){});