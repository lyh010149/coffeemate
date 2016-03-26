var app = angular.module('CoffeeWebApp');

app.controller('coffeeaddController', ['$scope','$location','$http', function($scope,$location, $http) {
    
    $scope.formData = {};

    $scope.message = ' Add the coffees now!';
    $scope.amount = 100;
    $scope.options = [{ name: "Mocha", id: 0 }, { name: "Latte", id: 1 }, { name: "Cappuccino", id: 2 }, { name: "Americano", id: 3 },
    { name: "Macchiato", id: 4 }, { name: "Affogato", id: 5 }, { name: "Irish Coffee", id: 6 }];
    $scope.formData.coffeeOptions = $scope.options[0];

    //Reset our formData fields
    $scope.formData.coffeename = 'Mocha';
    $scope.formData.amount = 1;
    $scope.formData.upvotes = 0;

    $scope.addCoffee = function(){
        $scope.formData.coffeename = $scope.formData.coffeeOptions.name;
        $http.post('/coffees', $scope.formData)
        .success(function(data) {
            $scope.coffees = data;
            $location.path('/coffees');
            console.log(data);
        })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

  }

  ]);
