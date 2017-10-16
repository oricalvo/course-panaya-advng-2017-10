var module1 = (function() {

    var data1;
    var data2;

    function run() {
        console.log("run1");
    }

    function internal() {
    }

    return {
        run: run,
    };

})();

