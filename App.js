let setDiff = require('./setDifference.js');
let setInter = require('./setIntersection.js');
let helloWorld = require('./helloworld.js');

let a = [1, 2, 3, 4, 5]
let b = [1, 3, 5, 6, 7]


console.log(helloWorld());
console.log(setDiff(a, b));
console.log(setInter(a, b));