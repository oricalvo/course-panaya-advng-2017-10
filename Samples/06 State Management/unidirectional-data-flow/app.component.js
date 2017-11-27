class AppComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get state() {
        return this.appStore;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
