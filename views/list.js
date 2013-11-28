apuokasApp.controller('listCtrl', ['$scope', function ($scope) {
    var json = {
        "irasai":
            [
                {
                    "zodis":{"zodis" : "tes"},
                    "raides":[
                        {"id":0, "title":"t"},
                        {"id":1,"title":"e"},
                        {"id":2,"title":"t"},
                        {"id":3,"title":"i"},
                        {"id":4,"title":"s"},
                    ]
                },

                {
                    "zodis":{"zodis": "alytus"},
                    "raides":[
                        {"id":0, "title":"a"},
                        {"id":1,"title":"l"},
                        {"id":2,"title":"y"},
                        {"id":3,"title":"t"},
                        {"id":4,"title":"u"},
                        {"id":5,"title":"s"},
                    ]
                },
                {
                    "zodis":{"zodis" : "ąžuolas"},
                    "raides":[
                        {"id":0, "title":"ą"},
                        {"id":1,"title":"ž"},
                        {"id":2,"title":"u"},
                        {"id":3,"title":"o"},
                        {"id":4,"title":"l"},
                        {"id":5,"title":"a"},
                        {"id":6,"title":"s"},
                    ]
                },
            ]
    };

    $scope.zodynas = json;
    $scope.hello = "Hello, world";
}]);