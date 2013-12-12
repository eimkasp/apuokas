apuokasApp.controller('oneCtrl', ['$scope', function ($scope) {
    $scope.zodynas = {
        "irasai":
            [
                {
                    "zodis":{"zodis" : "ąžuolas"},
                    "raides":[
                        {"id":0,"pav":"", "empty": "true"},
                        {"id":1,"pav":"ž", "empty": "false"},
                        {"id":2,"pav":"u", "empty": "false"},
                        {"id":3,"pav":"o", "empty": "false"},
                        {"id":4,"pav":"l", "empty": "false"},
                        {"id":5,"pav":"a", "empty": "false"},
                        {"id":6,"pav":"s", "empty": "false"}
                    ],
                    "trukstamosRaides":[
                        {"id":0, "pav":"a", "empty": "false", "correct": false},
                        {"id":1, "pav":"ą", "empty": "false", "correct": true}
                    ]
                }/*,
                {
                    "zodis":{"zodis" : "samanos"},
                    "raides":[
                        {"id":0,"pav":"s"},
                        {"id":1,"pav":""},
                        {"id":2,"pav":"m"},
                        {"id":3,"pav":"a"},
                        {"id":4,"pav":"n"},
                        {"id":5,"pav":"o"},
                        {"id":6,"pav":"s"}
                    ],
                    "trukstamosRaides":[
                        {"id":0, "pav":"a", "correct": true},
                        {"id":1, "pav":"ą", "correct": false}
                    ]
                }*/
            ]
    };
}]);