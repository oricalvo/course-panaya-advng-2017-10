"use strict";

class MyService {
    constructor() {
        this.data = 123;

        // kendo((...args) => {
        //     console.log(Array.isArray(args));
        //
        //     for(let i=0; i<args.length; i++) {
        //         console.log(args[i]);
        //     }
        //
        //     args.push("d");
        //
        //     console.log(this.data);
        // });

        kendo(function() {
            console.log(Array.isArray(arguments));

            for(let i=0; i<arguments.length; i++) {
                console.log(arguments[i]);
            }

            arguments.push("d");

            console.log(this.data);
        });
    }
}

function kendo(callback) {
    const context = {
        data: 456,
    };

    callback.call(context, "a", "b", "c");
}

new MyService();
