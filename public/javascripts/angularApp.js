var app = angular.module('CoffeeWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.ejs',
                controller  : 'contactController'
            })

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

             // route for the add coffee page
            .when('/coffeeadd', {
                templateUrl : 'pages/coffeeadd.ejs',
                controller  : 'coffeeaddController'
            })

             // route for the coffees page
            .when('/coffees', {
                templateUrl : 'pages/coffees.ejs',
                controller  : 'coffeesController'
            });
    });


  
  


