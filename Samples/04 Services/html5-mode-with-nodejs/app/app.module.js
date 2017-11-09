const myApp = angular.module("myApp", []);

myApp.config(function($locationProvider, $provide, myProvider, yyyProvider) {
    $locationProvider.html5Mode(true);

    //window.$locationProvider = $locationProvider;

    $provide.value("xxx", $locationProvider);

    myProvider.configSomething();
});

myApp.factory("yyy", function() {
    return {};
});

myApp.run(function(xxx, my, yyy) {
    xxx.html5Mode(true);

    my.doSomething();
});

myApp.provider("my", function() {
    var enableCache = false;

    this.$get = function() {
        return {
            doSomething: function() {
                console.log("doSomething");

            }
        }
    }

    this.configSomething = function() {
        console.log("configSomething");

        enableCache = true;
    }
});
