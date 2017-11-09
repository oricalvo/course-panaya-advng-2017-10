class AppComponent {
    constructor($interval, contactService) {
        this.counter = 0;
        this.intervalId = null;
        this.$interval = $interval;
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
