var apuokasApp = angular.module('apuokasApp', ['ngRoute', 'apuokasAppCtrl', 'ngDragDrop']);

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
            when('/mode1Levels', {
                templateUrl: 'views/mode1Levels.html',
                controller: 'mode1Ctrl'
            }).
            when('/mode1', {
                templateUrl: 'views/mode1.html',
                controller: 'mode1LevelsCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

var apuokasAppCtrl = angular.module('apuokasAppCtrl', [], function(){
});

apuokasApp.factory('chooseLevel', function () {
    var levels = [];
    var index;
    return {
        setLevels:function (data) {
            levels = data;
        },
        getLevels:function () {
            return levels;
        },
        setIndex:function (data) {
            index = data;
        },
        getIndex:function () {
            return index;
        }
    };
});