apuokasApp.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.zodziai = [
        {'name': 'mama',
            'raides': ['m', 'a', 'm', 'a'],
            'sudetingumas': 1
        },
        {'name': 'Ž',
            'raides': ['m', '8', 'm', 'a'],
            'sudetingumas': 2
        },
        {'name': 'Us',
            'raides': ['m', '2', 'm', 'a'],
            'sudetingumas': 1
        },
        {'name': 'B',
            'raides': ['m', 'b', 'm', 'a'],
            'sudetingumas': 1
        }
    ];


    $scope.orderProp = 'sudetingumas';
    $scope.hello = "Hello, world";
   // console.log($scope.zodziai[0].raide);
}]);