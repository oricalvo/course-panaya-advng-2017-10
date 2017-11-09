const myApp = angular.module("myApp", []);

myApp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});
