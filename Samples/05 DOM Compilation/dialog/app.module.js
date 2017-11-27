const myApp = angular.module("myApp", []);

myApp.config(function($provide) {
    $provide.value("di", $provide);
});

