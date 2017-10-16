var obj = {
    id: 1,
    name: "Ori",
};

var pool1 = new ObjectPool();
var pool2 = new ObjectPool();

pool1.add(obj);
console.log(pool1.size());
console.log(pool2.size());
pool2.add(obj);

console.log(pool1.size());
console.log(pool2.size());
console.log(obj);

var obj2 = {};
pool1.add(obj2);

// var res = pool.get();
// console.log(res == obj);
//
// console.log(pool.get());