(function () {
    'use strict';

    angular.module( 'ngBoilerplate.cars', [] )

    .factory('cars', [carsFn]);

    function carsFn() {
        var cars = {};

        function getCars() {
            return "[cars service] LOL cars";
        }

        function getAllCars() {
            var allCars = [
                {
                    "_id": "5491e14038419232e1329cba",
                    "isDeal": true,
                    "price": "2,669.94",
                    "picture": "http://placehold.it/150x150",
                    "color": "blue",
                    "brand": "Furnafix",
                    "model": "Merrill",
                    "year": 2010
                },
                {
                    "_id": "5491e14044ab917d14215b76",
                    "isDeal": true,
                    "price": "1,294.71",
                    "picture": "http://placehold.it/150x150",
                    "color": "red",
                    "brand": "Acruex",
                    "model": "Payne",
                    "year": 2015
                },
                {
                    "_id": "5491e1403adb5c2339a94210",
                    "isDeal": true,
                    "price": "3,404.65",
                    "picture": "http://placehold.it/150x150",
                    "color": "brown",
                    "brand": "Techade",
                    "model": "Chaney",
                    "year": 2010
                },
                {
                    "_id": "5491e140cf29ad52435eaf87",
                    "isDeal": false,
                    "price": "2,110.64",
                    "picture": "http://placehold.it/150x150",
                    "color": "black",
                    "brand": "Waretel",
                    "model": "Roman",
                    "year": 2014
                },
                {
                    "_id": "5491e140c1cfdaae95ccf42a",
                    "isDeal": true,
                    "price": "3,899.57",
                    "picture": "http://placehold.it/150x150",
                    "color": "red",
                    "brand": "Pearlessa",
                    "model": "Preston",
                    "year": 2013
                },
                {
                    "_id": "5491e1403a9054f9d709dddb",
                    "isDeal": false,
                    "price": "3,284.38",
                    "picture": "http://placehold.it/150x150",
                    "color": "blue",
                    "brand": "Flexigen",
                    "model": "Crosby",
                    "year": 2015
                },
                {
                    "_id": "5491e140f74a877fec5b06b3",
                    "isDeal": false,
                    "price": "3,133.75",
                    "picture": "http://placehold.it/150x150",
                    "color": "blue",
                    "brand": "Opticom",
                    "model": "Barton",
                    "year": 2013
                },
                {
                    "_id": "5491e140667020d025681879",
                    "isDeal": true,
                    "price": "3,277.51",
                    "picture": "http://placehold.it/150x150",
                    "color": "brown",
                    "brand": "Eplosion",
                    "model": "Hensley",
                    "year": 2015
                }
            ];

            // TODO: add storage https://github.com/grevory/angular-local-storage
            // TODO: add compare service and template. uses local storage to display the cars to compare
            cars = allCars; // TODO: check if allCars is empty, if it is add to storage, if not retrieve from storage. cars service manages the car retrieval using local storage not each controller
            return cars;
        }

        function getCarById(carId) {
            var carDetails = _.find(cars, {"_id": carId});
            return carDetails;
        }

        return {
            getAllCars: getAllCars,
            getCarById: getCarById
        };
    }

})();


//JSON GENERATOR
//    [
//    '{{repeat(8, 8)}}',
//    {
//        _id: '{{objectId()}}',
//        isDeal: '{{bool()}}',
//        price: '{{floating(1000, 4000, 2, "0,0.00")}}',
//        picture: 'http://placehold.it/150x150',
//        color: '{{random("blue", "brown", "green", "black", "red")}}',
//        brand: '{{company()}}',
//        model: '{{surname()}}',
//        year: '{{integer(2010,2015)}}'
//    }
//    ]