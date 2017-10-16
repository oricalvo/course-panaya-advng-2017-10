var MAGIC_FIELD = "$$$cdoidhidchcdu$$$";
var nextId = 1000;

function getHashCode(obj) {
    var hash = obj[MAGIC_FIELD];
    if(!hash) {
        hash = obj[MAGIC_FIELD] = nextId++;
    }

    return hash;
}

export class ObjectPool {
    constructor() {
        this.map = {};
        this.count = 0;
    }

    add(obj) {
        var hash = getHashCode(obj);

        if(this.map[hash]) {
            return;
        }

        this.map[hash] = obj;
        ++this.count;
    }

    get() {
        for(var key in this.map) {
            var obj = this.map[key];
            delete this.map[key];
            --this.count;
            return obj;
        }

        return null;
    }

    size() {
        return this.count;
    }
}
