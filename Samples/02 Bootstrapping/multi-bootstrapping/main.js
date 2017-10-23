const elements = document.querySelectorAll("[my-app]");

var arr = [];

for(let i=0; i<elements.length; i++) {
    const elem = elements[i];

    angular.bootstrap(elem, [myApp.name])
}

