class ProfilerService {
    constructor($rootScope) {
        this.counterDigest = {name: "digests", value: 0};
        this.counterTimers = {name: "timers", value: 0};

        this.counters = [
            this.counterDigest,
            this.counterTimers,
        ];

        this.monkeyPatchDigest($rootScope);
        this.monkeyPatchTimers();
    }

    monkeyPatchDigest($rootScope) {
        const me = this;

        const scopePrototype = $rootScope.constructor.prototype;
        const originalDigest = scopePrototype.$digest;

        scopePrototype.$digest = function() {
            me.counterDigest.value++;

            originalDigest.apply(this, arguments);
        }
    }

    monkeyPatchTimers() {
        const me = this;

        const originalSetInterval = window.setInterval;

        window.setInterval = function() {
            const callback = arguments[0];

            arguments[0] = function() {
                me.counterTimers.value++;

                return callback.apply(this, arguments);
            }

            return originalSetInterval.apply(this, arguments);
        }
    }
}

myApp.service("profilerService", ProfilerService);
