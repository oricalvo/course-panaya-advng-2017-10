const myApp = angular.module("myApp", []);

myApp.controller("HomeCtrl", function($scope, $element) {
    $scope.counter = 0;

    $scope.inc = function () {
        ++$scope.counter;
    }

    $scope.onChange = function() {
    }

    $scope.browse = function() {
        console.log("BEGIN browse");

        const input = $element[0].querySelector("input[type=file]");

        input.addEventListener("change", function(e) {
            $scope.file = e.target.files[0];

            $scope.$applyAsync(function() {
                console.log("XXX");
            });
        });

        if(input) {
            input.click();
        }

        console.log("END browse");
    }

});
