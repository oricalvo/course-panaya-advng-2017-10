myApp.directive("my", function($parse, $http) {

    const ddo = {
        restrict: "E",
        compile: function(element) {
            console.log("compile");
        }
    };

    return ddo;

});


myApp.directive("ngIf", function($parse, $http) {

    const ddo = {
        restrict: "A",
        compile: function(element) {
            console.log("compile");
        }
    };

    return ddo;

});
