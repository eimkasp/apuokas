apuokasApp.controller('homeCtrl', ['$scope', function ($scope) {
    var json = {
        "modules":
            [
                {
                    "zodis":"mama",
                    "raides":[{"id":0, "title":"m"},
                        {"id":1, "title":"a"},
                        {"id":2, "title":"m"},
                        {"id":3, "title":"a"}]
                },

                {
                    "zodis":"tetis",
                    "raides":[{"id":0, "title":"t"},
                        {"id":1,"title":"e"},
                        {"id":2,"title":"t"},
                        {"id":3,"title":"i"},
                        {"id":4,"title":"s"},

                    ]
                }
            ]
    };

    $scope.ocw = json;

//    $scope.main = zodziai;
//    $scope.orderProp = 'sudetingumas';
    $scope.hello = "Hello, world";
   // console.log($scope.zodziai[0].raide);
}]);