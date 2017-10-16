function PointEx(x, y, z) {
    Point.call(this, x, y);

    this.z = z;
}

PointEx.prototype = Object.create(Point.prototype);

PointEx.prototype.newFunc = function() {
}

PointEx.prototype.dump = function() {
    Point.prototype.dump.call(this);
    console.log(this.z);
}

var pt3 = new PointEx(5, 10, 20);

pt3.dump();
pt3.move(1,1);
pt3.newFunc();

