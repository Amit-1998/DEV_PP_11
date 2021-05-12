const fs = require("fs");

console.log("start");

//sync
let f1kaData = fs.readFileSync('./f1.txt'); //if 100GB than niche ka content not able to print
console.log(f1kaData+"");

console.log("end");