angular.module( 'ngBoilerplate.carDetail', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'ngBoilerplate.cars'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'detail', {
            url: '/detail/:carId',
            views: {
                "main": {
                    controller: 'CarDetailCtrl',
                    templateUrl: 'carDetail/carDetail.tpl.html'
                }
            },
            data:{ pageTitle: 'Car Detail' }
        });
    })

    .controller( 'CarDetailCtrl', function CarDetailCtrl( $scope, $stateParams, cars ) {
        console.log("car detail controller");
        console.log("[details] $stateParams", $stateParams);
        console.log("[details] cars", cars);
        // TODO: get car details by id
        $scope.car = cars.getCarById($stateParams.carId);
        $scope.dropdownDemoItems = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
        ];
    })

;
