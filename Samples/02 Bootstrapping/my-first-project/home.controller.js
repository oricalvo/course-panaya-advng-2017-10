(function() {
    "use strict";

    function HomeCtrl($scope) {
        console.log("HomeCtrl");

        $scope.$on("$destroy", function() {
            console.log("HomeCtrl.destroy");
        });
    }

    myApp.controller("HomeCtrl", HomeCtrl);
})();


