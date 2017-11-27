myApp.directive("myIf", function($compile, $parse, $http) {
    const ddo = {
        restrict: "A",
        compile: function(element, attrs) {
            console.log("compile", attrs);
            const expr = attrs["myIf"];

            angular.element("<!-- myIf -->").insertBefore(element);

            const template = angular.element(element[0].outerHTML);
            template.removeAttr("my-if");
            const linkFn = $compile(template);

            console.log(template);

            element.remove();

            // return {
            //     pre: function() {
            //     },
            //     post: function() {
            //     }
            // }

            return function postLink(scope, marker, attr) {
                console.log("link", marker);
                let clone;
                let childScope;

                scope.$watch(expr, function(newValue) {
                    if(newValue) {
                        childScope = scope.$new();
                        clone = linkFn(childScope, function(clone) {
                            clone.insertAfter(marker);
                        });
                    }
                    else {
                        if(clone) {
                            clone.remove();
                            clone = null;
                        }

                        if(childScope) {
                            childScope.$destroy();
                            childScope = null;
                        }
                    }
                });
            }
        }
    };

    return ddo;

});
