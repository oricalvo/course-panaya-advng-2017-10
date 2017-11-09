class AppComponent {
    constructor($location) {
        this.counter = 0;
        this.intervalId = null;
        this.$location = $location;
    }

    changeUrl() {
        this.$location.url("xxx");
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
