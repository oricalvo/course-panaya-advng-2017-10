import {myApp} from "./app.module";
import {HomeController} from "./home.component";
import {AppController} from "./app.component";

const components = [
    AppController,
    HomeController,
];

for(const comp of components) {
    myApp.component(comp.metadata.tagName, comp.metadata);
}

angular.bootstrap(document.querySelector("html"), [myApp.name]);
