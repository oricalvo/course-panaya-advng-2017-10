export class HomeController {
    constructor() {
        this.title = "Home";
    }
}

HomeController.metadata = {
    tagName: "appHome",
    controller: HomeController,
    templateUrl: "home.component.html",
};
