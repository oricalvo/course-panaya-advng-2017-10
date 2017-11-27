class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    deleteContact(contact, index) {
        if (confirm("Delete contact " + contact.name + "?")) {
            this.contacts.splice(index, 1);
        }
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
