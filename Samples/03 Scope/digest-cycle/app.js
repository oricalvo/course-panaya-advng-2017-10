const myApp = angular.module("myApp", []);

myApp.controller("HomeCtrl", function($scope) {
    $scope.counter = 0;
    $scope.data = 1000;

    $scope.inc = function () {
        ++$scope.counter;
    }

    $scope.$watch("counter", function (newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        console.log("counter", oldValue + " ---> " + newValue);

        ++$scope.data;
    });

    $scope.$watch("data", function (newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        console.log("data", oldValue + " ---> " + newValue);

        ++$scope.counter;
    });

    // $scope.$watch(function () {
    //     return document.querySelector(".title").innerText
    //     return window.location.pathname;
    // }, function (newValue, oldValue) {
    //     console.log(oldValue + " ---> " + newValue);
    // });

    $scope.changeUrl = function() {
        history.pushState({}, null, "XXX");
    }
});
