const myApp = angular.module("myApp", []);

myApp.service("xxx", function() {
});

myApp.config(["$controllerProvider", function($controllerProvider) {
    console.log($controllerProvider);

    //myApp.$controllerProvider = $controllerProvider;

    myApp.controller = $controllerProvider.register;
}]);
