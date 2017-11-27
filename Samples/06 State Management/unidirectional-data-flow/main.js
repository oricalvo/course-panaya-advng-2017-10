myApp.run(function(appService) {
    appService.reloadContacts();
});

angular.bootstrap(document.querySelector("html"), [myApp.name]);


