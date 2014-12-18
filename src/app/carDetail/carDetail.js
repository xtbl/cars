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
        $scope.car = cars.getCarById($stateParams.carId);
        console.log("details", $scope.car);
    })

;
