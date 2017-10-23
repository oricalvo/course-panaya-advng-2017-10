const myModule = angular.module("myModule", []);

const myApp = angular.module("myApp", ["myModule"]);

myModule.config(function() {
    console.log("myModule.config");
});

myModule.run(function() {
    console.log("myModule.run");
});

myApp.config(["$controllerProvider", function($controllerProvider) {
    console.log("myApp.config");

    console.log("config", $controllerProvider);

    //myApp.$controllerProvider = $controllerProvider;

    myApp.controller = $controllerProvider.register;
}]);

myApp.run(["$rootScope", function($rootScope) {
    console.log("myApp.run");

    console.log("run", $rootScope);
}]);
