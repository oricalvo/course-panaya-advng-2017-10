(function() {
    "use strict";

    function AppCtrl($scope, contactService) {
        console.log("AppCtrl");

        $scope.toggleHome = function() {
            $scope.showHome = !$scope.showHome;
        }

        $scope.clear = function() {
            const elem = document.getElementById("home");
            elem.parentNode.removeChild(elem);
        }
    }

    myApp.controller("AppCtrl", AppCtrl);
})();
