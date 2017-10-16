function Counter() {
    var data = 123;

    function print() {
        console.log(data);
    }

    function inc() {
        ++data;
    }

    return {
        print,
        inc,
    };
}

var c1 = new Counter();
c1.inc();
c1.print();

var c2 = new Counter();
c2.print();
