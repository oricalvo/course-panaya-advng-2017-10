class Contact {
    constructor($http) {
        console.log("ctor", !!$http);
    }
}

class AppComponent {
    constructor($injector) {
        this.counter = 0;

        const c1 = $injector.instantiate(Contact);
        const c2 = $injector.instantiate(Contact);

        // const injector = angular.element(document.querySelector("html")).injector();
        // console.log(injector);
        //
        // const http = injector.get("$http");
        // console.log(http);
    }
    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
