apuokasApp.controller('mode1LevelsCtrl', ['$scope', '$location', '$http', 'chooseLevel', function ($scope, $location, $http, chooseLevel) {
    $http.get('data/mode1LevelData.json').success(function(data, status) {
        $scope.levels = data;
    });

    $scope.goToLevel = function (index) {
        chooseLevel.setLevels($scope.levels);
        chooseLevel.setIndex(index);
        $location.path('mode1');
    };
}]);