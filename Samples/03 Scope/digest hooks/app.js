const myApp = angular.module("myApp", []);

myApp.controller("HomeCtrl", function($scope, $element) {
    $scope.counter = 0;
    $scope.data = 0;

    $scope.$watch("counter", function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        setTimeout(function() {
            console.log("data", $scope.data);
        }, 0);

        // $scope.$evalAsync(function() {
        //     console.log("data", $scope.data);
        // });
    });

    $scope.$watch("counter", function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        Promise.resolve().then(function() {
            console.log("THEN");
            ++$scope.data;
        });
    });

    $scope.inc = function () {
        $scope.$applyAsync(function() {
            console.log("Cycle begin");
        });

        $scope.$$postDigest(function() {
            console.log("Cycle end");
        });

        $scope.$watch(function() {
            console.log("Iteration");
        });

        ++$scope.counter;
    }
});
