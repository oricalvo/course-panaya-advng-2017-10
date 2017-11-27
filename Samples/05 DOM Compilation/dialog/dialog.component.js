class DialogComponent {
    constructor($compile, $scope, $element, di) {
        console.log("Dialog.ctor");

        di.value("dialogService", this);

        this.cache = {};
        this.isActive = false;
        this.$compile = $compile;
        this.$scope = $scope;
        this.$element = $element;
        this.childScope = null;
        this.childElement = null;
        this.content = angular.element(this.$element[0].querySelector(".content"));
        if(!this.content) {
            throw new Error("content was not found");
        }
    }

    compile(tagName) {
        const template = "<" + tagName + "></" + tagName + ">";
        const childElement = angular.element(template);
        const linkFn = this.$compile(childElement);
        return linkFn;
    }

    show(tagName) {
        const before = performance.now();

        let linkFn = this.cache[tagName];
        if(!linkFn) {
            linkFn = this.cache[tagName] = this.compile(tagName);
        }

        this.childScope = this.$scope.$new();
        this.childElement = linkFn(this.childScope, function(clone){});

        this.content.append(this.childElement);

        this.isActive = true;

        const after = performance.now();

        console.log("show", after-before);
    }

    close() {
        if(!this.childScope) {
            return;
        }

        this.childScope.$destroy();
        this.childScope = null;

        this.childElement.remove();
        this.childElement = null;

        this.isActive = false;
    }
}

myApp.component("appDialog", {
    controller: DialogComponent,
    templateUrl: "dialog.component.html",
});
