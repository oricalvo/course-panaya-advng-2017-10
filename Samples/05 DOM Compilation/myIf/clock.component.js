//import template from "./clock.component.html";

class ClockComponent {
    constructor() {
        console.log("Clock.ctor");

        this.time = new Date();
    }

    $onInit() {
        console.log("Clock.$onInit");
    }

    $onDestroy() {
        console.log("Clock.$onDestroy");
    }

    $postLink() {
        console.log("Clock.$postLink");
    }
}

myApp.component("appClock", {
    controller: ClockComponent,
    //template: require("./clock.component.html"),
    template: "<span>{{$ctrl.time | date: 'HH:mm:ss'}}</span>",
});
