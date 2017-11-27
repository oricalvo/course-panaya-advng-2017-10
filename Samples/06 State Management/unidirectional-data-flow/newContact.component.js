class NewContactComponent {
    constructor(appService) {
        this.appService = appService;
    }

    add() {
        this.appService.add(this.name);
    }
}

myApp.component("appNewContact", {
    controller: NewContactComponent,
    templateUrl: "newContact.component.html",
});
