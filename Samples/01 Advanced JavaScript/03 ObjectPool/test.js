var obj = {
    id: 1,
    name: "Ori",
};

objectPool.add(obj);
objectPool.add(obj);

console.log(objectPool.size());

var res = objectPool.get();
console.log(res == obj);

console.log(objectPool.get());