(function() {
    "use strict";

    function AppCtrl($scope) {
        console.log("AppCtrl");

        $scope.gotoHome = function() {
            console.log("Injecting script tag");

            $.getScript('home.controller.js', function() {
                console.log("Changing view");

                $scope.view = "home";

                $scope.$apply();
            });

            // const script = $("<script defer src='home.controller.js'></script>");
            // $("head").append(script);
            // console.log("After injecting script tag");
            //
            // script.bind("load", function() {
            //     $scope.view = "home";
            // });
        }
    }

    myApp.controller("AppCtrl", ["$scope", AppCtrl]);
})();
