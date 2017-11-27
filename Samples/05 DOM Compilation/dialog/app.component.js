class AppComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }

    showDialog() {
        this.dialogService.show("app-clock");
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
