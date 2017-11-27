class AppComponent {
    constructor($compile, $scope, $interpolate, $parse) {
        this.counter = 0;
        this.$compile = $compile;
        this.$scope = $scope;
        this.$interpolate = $interpolate;
        this.$parse = $parse;
    }

    run() {
        const interpolateFn = this.$interpolate("Hello {{name}}");
        let output = interpolateFn({
            id: 123,
            name: "Ori"
        });

        console.log(output);

        output = interpolateFn({
            name: "Roni"
        });

        console.log(output);

        const expr = "a && b() || c";
        const exprFn = this.$parse(expr);

        const value = exprFn({
            a: 123,
            b: function(){},
            c: {},
        });
        console.log("value", value);
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
