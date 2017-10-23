(function() {
    "use strict";

    console.log("HomeCtrl script loaded");

    function HomeCtrl($scope) {
        console.log("HomeCtrl");

        $scope.$on("$destroy", function() {
            console.log("HomeCtrl.destroy");
        });
    }

    myApp.controller("HomeCtrl", ["$scope", HomeCtrl]);

    console.log("After registration");
})();


