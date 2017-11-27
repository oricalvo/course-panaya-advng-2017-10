class AppComponent {
    constructor($compile, $scope, ngIfDirective) {
        console.log("App.ctor");

        this.counter = 0;
        this.$compile = $compile;
        this.$scope = $scope;
        this.show = false;
    }

    $onInit() {
        console.log("App.$onInit");
    }

    $postLink() {
        console.log("App.$postLink");
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }

    change() {
        this.show = !this.show;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
