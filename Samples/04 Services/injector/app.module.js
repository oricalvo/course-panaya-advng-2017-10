const myApp = angular.module("myApp", []);

let i1;
let i2;

myApp.config(function($injector) {
    i1 = $injector;
});

myApp.run(function($injector) {
    i2 = $injector;

    console.log(i1 == i2);

    console.log(i1.get("$locationProvider"));
});
