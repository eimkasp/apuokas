var apuokasApp = angular.module('apuokasApp', ['ngRoute', 'apuokasAppCtrl']);

apuokasApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            }).
            when('/list', {
                templateUrl: 'list.html',
                controller: 'listCtrl'
            }).
            when('/mode1Levels', {
                templateUrl: 'mode1levels.html',
                controller: 'mode1LevelsCtrl'
            }).
            when('/mode1', {
                templateUrl: 'mode1.html',
                controller: 'mode1Ctrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

apuokasApp.factory('chooseLevel', function () {
    var levels = [];
    var index;
    return {
        setLevels: function (data) {
            levels = data;
        },
        getLevels: function () {
            return levels;
        },
        setIndex: function (data) {
            index = data;
        },
        getIndex: function () {
            return index;
        }
    };
});

var apuokasAppCtrl = angular.module('apuokasAppCtrl', [], function () {
});

apuokasApp.controller('homeCtrl', ['$scope', function ($scope) {

}]);

apuokasApp.controller('mode1LevelsCtrl', ['$scope', '$location', '$http', 'chooseLevel', function ($scope, $location, $http, chooseLevel) {
    $http.get('/data/mode1LevelData.json').success(function (data, status) {
        $scope.levels = data;
    });

    $scope.goToLevel = function (index) {
        chooseLevel.setLevels($scope.levels);
        chooseLevel.setIndex(index);
        $location.path('mode1');
    };
}]);

apuokasApp.controller('mode1Ctrl', ['$scope', '$route', '$location', 'chooseLevel', function ($scope, $route, $location, chooseLevel) {
    var levels = chooseLevel.getLevels();
    var currentLevel = chooseLevel.getIndex();

    $scope.logg = function (data) {
        console.log(data);
    }

    $scope.zodis = levels[currentLevel];
    //console.log($scope.zodis);

    $scope.lose = false;
    $scope.win = false;

    $scope.dropCallback = function (event, ui) {
        if ($scope.zodis.trukstamosRaides[(ui['draggable'].context.id)].correct)
            $scope.win = true;
        else
            $scope.lose = true;

        console.log(event);
        console.log(ui);
    };


    $scope.quit = function () {
        $location.path('/');
    };

    $scope.goToNextLevel = function () {
        chooseLevel.setIndex(currentLevel + 1);
        $route.reload();
    };
}]);