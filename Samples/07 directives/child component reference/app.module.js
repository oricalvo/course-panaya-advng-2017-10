const myApp = angular.module("myApp", []);

// myApp.run(function($injector) {
//     const originalInvoke = $injector.invoke;
//
//     $injector.invoke = function(expression, instance, locals) {
//         const comp = originalInvoke.apply(this, arguments);
//
//         if(expression.$component) {
//             handleComponentReferenceSyntax(comp, locals.$scope, locals.$attrs);
//         }
//
//         return comp;
//     }
// });

function handleComponentReferenceSyntax(comp, scope, attrs) {
    for(const key in attrs) {
        if(key[0] == "#") {
            const refName = key.substring(1);

            scope.$parent.$ctrl[refName] = comp;
        }
    }

}
