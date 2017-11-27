class AppComponent {
    constructor($http) {
    }

    refreshClock1() {
        this.clock1.refresh();
    }

    refreshClock2() {
        this.clock2.refresh();
    }

    onClockTick() {
        console.log("tick");
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
