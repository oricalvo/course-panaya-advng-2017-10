import {myApp} from "./app.module";
import {HomeController} from "./home.controller";
import {AppController} from "./app.controller";
import {registerAllControllers} from "./fx";

registerAllControllers(myApp, [
    AppController,
    HomeController,
]);

angular.bootstrap(document.querySelector("html"), [myApp.name]);
