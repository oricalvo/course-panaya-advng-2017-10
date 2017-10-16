var objectPool = (function() {
    "use strict"

    var map = {};
    var MAGIC_FIELD = "$$$cdoidhidchcdu$$$";
    var nextId = 1000;
    var count = 0;

    function getHashCode(obj) {
        var hash = obj[MAGIC_FIELD];
        if(!hash) {
            hash = obj[MAGIC_FIELD] = nextId++;
        }

        return hash;
    }

    function add(obj) {
        var hash = getHashCode(obj);

        if(map[hash]) {
            return;
        }

        map[hash] = obj;
        ++count;
    }

    function get() {
        for(var key in map) {
            var obj = map[key];
            delete map[key];
            --count;
            return obj;
        }

        return null;
    }

    function size() {
        return count;
    }

    return {
        add: add,
        get: get,
        size: size,
    }
})();
