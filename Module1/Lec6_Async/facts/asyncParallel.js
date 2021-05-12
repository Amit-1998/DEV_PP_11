// multiple files => f1,f2 and f3
// async code
// simulatenously read all the files and get data !!

const fs = require("fs");

console.log("start");

fs.readFile('./f1.txt',function(error,data){
    console.log(data+"");
});

fs.readFile('./f2.txt',function(error,data){
    console.log(data+"");
});

fs.readFile('./f3.txt',function(error,data){
    console.log(data+"");
});

console.log("end");

//all possible outputs on differnt runs:

// //output1
// start
// end       
// Hi I am F2  // cb of  f2 pushed first on call stack
// Hi I am F3
// Hi I am F1

// //output 2
// start
// end
// Hi I am F2
// Hi I am F1
// Hi I am F3

// //ouput3
// start
// end
// Hi I am F1   // cb of f1 pushed first on call stack
// Hi I am F3
// Hi I am F2