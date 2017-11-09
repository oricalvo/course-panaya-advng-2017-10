const myApp = angular.module("myApp", []);

class AppComponent {
    constructor($scope) {
        console.log("ctor");
        console.log(this.format);

        this.counter = 0;

        this.allocate();

        // $scope.$on("$destroy", ()=> {
        //     this.dispose();
        // });
    }

    $onInit() {
        console.log("$onInit");
        console.log(this.format);

        this.deallocate();
    }

    $onDestroy() {
        console.log("$onDestroy");

        this.deallocate();
    }

    allocate() {
    }

    deallocate() {
    }

    inc() {
        ++this.counter;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
    bindings: {
        format: "<",
    }
});

myApp.run(function($rootScope) {
    $rootScope.showAppComponent = true;

    $rootScope.toggle = function() {
        $rootScope.showAppComponent = !$rootScope.showAppComponent;
    }
});
