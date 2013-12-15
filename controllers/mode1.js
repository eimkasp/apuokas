apuokasApp.controller('mode1Ctrl', ['$scope', '$route', '$location', 'chooseLevel', function ($scope, $route, $location, chooseLevel) {
    var levels = chooseLevel.getLevels();
    var currentLevel = chooseLevel.getIndex();

    $scope.zodis = levels[currentLevel];
    //console.log($scope.zodis);

    $scope.lose = false;
    $scope.win = false;

    $scope.dropCallback = function(event, ui) {
        if($scope.zodis.trukstamosRaides[(ui['draggable'].context.id)].correct)
            $scope.win = true;
        else
            $scope.lose = true;
    };


    $scope.quit = function () {
        $location.path('/');
    };

    $scope.goToNextLevel = function () {
        chooseLevel.setIndex(currentLevel + 1);
        $route.reload();
    };
}]);