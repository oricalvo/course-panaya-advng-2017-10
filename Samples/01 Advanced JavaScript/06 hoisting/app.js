"use strict";

var obj = {
    id: 1,
    name: "Ori",
    g: function(num1, num2) {
        console.log(this, num1, num2);
    }
}

var g = obj.g;
g.call(123, 5, 6);
g.apply(123, [5,6]);
var gg = g.bind(123, "x");
gg("y");


