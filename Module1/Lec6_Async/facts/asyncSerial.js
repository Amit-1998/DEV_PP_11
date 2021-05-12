//multiple files
// async code
// f1kaData => f2KaData => f3KaData

const fs = require("fs");

console.log("start");

fs.readFile('./f1.txt',function(error,data){
      console.log(data+"");
      fs.readFile('./f2.txt',function(error,data){
            console.log(data+"");
            fs.readFile('./f3.txt',function(error,data){
                console.log(data+"");
            });
      });
});

console.log("end");


// Output (Always Same)

// start
// end       
// Hi I am F1
// Hi I am F2
// Hi I am F3

