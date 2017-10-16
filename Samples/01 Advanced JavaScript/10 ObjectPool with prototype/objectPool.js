var ObjectPool = (function() {
    "use strict"

    var MAGIC_FIELD = "$$$cdoidhidchcdu$$$";
    var nextId = 1000;

    function getHashCode(obj) {
        var hash = obj[MAGIC_FIELD];
        if(!hash) {
            hash = obj[MAGIC_FIELD] = nextId++;
        }

        return hash;
    }

    function ObjectPool() {
        this.map = {};
        this.count = 0;
    }

    ObjectPool.prototype.add = function(obj) {
        var hash = getHashCode(obj);

        if(this.map[hash]) {
            return;
        }

        this.map[hash] = obj;
        ++this.count;
    }

    ObjectPool.prototype.get = function() {
        for(var key in this.map) {
            var obj = this.map[key];
            delete this.map[key];
            --this.count;
            return obj;
        }

        return null;
    }

    ObjectPool.prototype.size = function() {
        return this.count;
    }

    return ObjectPool;
})();
