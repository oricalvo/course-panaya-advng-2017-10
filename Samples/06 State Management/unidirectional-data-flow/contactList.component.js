class ContactListComponent {
    constructor(appStore, $scope) {
        this.appStore = appStore;

        //$scope.$$noChangeDetection = true;
    }

    // get contacts() {
    //     return this.appStore.contacts;
    // }
}

myApp.component("appContactList", {
    controller: ContactListComponent,
    templateUrl: "contactList.component.html",
    bindings: {
        "contacts": "<",
    }
});
