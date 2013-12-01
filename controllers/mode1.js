apuokasApp.controller('oneCtrl', ['$scope', function ($scope) {
    var json = {
        "irasai":
            [
                {
                    "zodis":{"zodis" : "ąžuolas"},
                    "raides":[
                        {"id":0,"title":"ą"},
                        {"id":1,"title":"ž"},
                        {"id":2,"title":"u"},
                        {"id":3,"title":"o"},
                        {"id":4,"title":"l"},
                        {"id":5,"title":"a"},
                        {"id":6,"title":"s"},
                    ]
                }
            ]
    };

    $scope.zodynas = json;
}]);