class AppService {
    constructor(appStore, $timeout) {
        this.appStore = appStore;
        this.$timeout = $timeout;
    }

    find(name) {
        this.appStore.filter = name;

        this.rerunFilter();
    }

    add(name) {
        const contact = {
            id: -1,
            name: name,
        };

        const contacts = this.appStore.all.concat([contact]);
        this.setContacts(contacts);
    }

    setContacts(all) {
        this.appStore.all = all;

        this.onAllChanged();
    }

    onAllChanged() {
        this.rerunFilter();
    }

    rerunFilter() {
        if(!this.appStore.all) {
            this.appStore.contacts = null;
            return;
        }

        this.appStore.contacts = this.appStore.all.filter(c => c.name.toLowerCase().indexOf(this.appStore.filter.toLowerCase())!=-1);
    }

    reloadContacts() {
        this.$timeout(()=> {
            this.setContacts([
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
                {id:3, name: "Udi"},
                {id:4, name: "Tommy"},
            ]);
        }, 2500);
    }
}

myApp.service("appService", AppService);

