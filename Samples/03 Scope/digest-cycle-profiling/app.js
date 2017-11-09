const myApp = angular.module("myApp", []);

myApp.run(function($rootScope) {
    console.log("run");

    console.log($rootScope);

    const originalDigest = $rootScope.constructor.prototype.$digest;

    $rootScope.constructor.prototype.$digest = function() {
        const before = performance.now();

        originalDigest.apply(this, arguments);

        const after = performance.now();

        console.log("$digest cycle", (after-before));
    }

    $rootScope.$watch(function() {
        console.log("iteration");
    });
});

myApp.controller("HomeCtrl", function($scope) {
    $scope.counter = 0;
    $scope.data = 1000;
    $scope.contact = {
        id: 1,
        name: "Ori",
    };

    $scope.$watch("contact", function(newValue) {
        console.log("contact CHANGED");
    });

    $scope.stam = function() {
    }

    $scope.inc = function () {
        $scope.contact = {
            ...$scope.contact,
            name: $scope.contact.name + "X",
        };

        ++$scope.counter;
    }

    $scope.$watch("data", function (newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        console.log("data", oldValue + " ---> " + newValue);
    });

    $scope.$watch("counter", function (newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        console.log("counter", oldValue + " ---> " + newValue);

        ++$scope.data;
    });

});
