const fs = require("fs");

let files = ["../f1.txt","../f2.txt","../f3.txt"]; // Array containing paths of  n files

//async code
//simulataneous process
console.log("start");

for(let i=0; i<files.length; i++){   // it is exactly same code as we did previous asyncParallel
   fs.readFile(files[i],function(error,data){
       console.log(data+"");
   })   
}

console.log("end");

// Output on various runs

// start
// end       
// Hi I am F1
// Hi I am F2
// Hi I am F3

// start
// end       
// Hi I am F3
// Hi I am F2
// Hi I am F1


// start
// end
// Hi I am F2
// Hi I am F1
// Hi I am F3


