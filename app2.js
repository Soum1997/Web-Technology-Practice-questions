var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'./home.html',
        controller:'homeController'
    })
    .when('/contact',{
        templateUrl:'./contact.html',
        controller:'contactController'
    })
    .otherwise({redirectTo:'/'});
})