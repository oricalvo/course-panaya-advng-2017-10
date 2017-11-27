class SearchComponent {
    constructor(appService) {
        this.name = "";
        this.appService = appService;
    }

    find() {
        this.appService.find(this.name);
    }

    onNameChanged() {
        console.log(this.name);

        this.appService.find(this.name);
    }
}

myApp.component("appSearch", {
    controller: SearchComponent,
    templateUrl: "search.component.html",
});
