export class AppController {
    constructor() {
        this.title = "App";
    }
}

AppController.metadata = {
    tagName: "appRoot",
    controller: AppController,
    templateUrl: "app.component.html",
};
