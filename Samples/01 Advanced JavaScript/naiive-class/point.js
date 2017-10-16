function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x+=dx;
        y+=dy;
    }

    return {
        dump: dump,
        //move: move,
    };
}

function Dummy() {
}

var d1 = new Dummy();

d1.pt1 = new Point(5,10);
d1.pt2 = new Point(10,20);

//console.log(pt1.dump == pt2.dump);
