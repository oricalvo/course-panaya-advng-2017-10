class AppComponent {
    constructor($compile, $scope) {
        this.counter = 0;
        this.$compile = $compile;
        this.$scope = $scope;
    }

    compile() {
        const template = angular.element("<span>{{counter}}</span>");
        const linkFn = this.$compile(template);
        const childScope = this.$scope.$new();
        const clone = linkFn(childScope, function(clone){});

        childScope.counter = 123;

        //childScope.$digest();

        console.log("template", template[0].outerHTML);
        console.log("clone", clone[0].outerHTML);

        setTimeout(function() {
            console.log("template", template[0].outerHTML);
            console.log("clone", clone[0].outerHTML);
        }, 0);
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
