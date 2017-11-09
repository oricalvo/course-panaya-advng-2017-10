class AppComponent {
    constructor($location) {
        this.counter = 0;
        this.intervalId = null;
        this.$location = $location;
    }

    changeUrl() {
        this.$location.url(this.$location.url() + "x");
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
    templateUrl: "app/app.component.html",
});
