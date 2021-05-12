const fs = require("fs");

console.log("start");

// readFile => async function of fs
fs.readFile("./f1.txt", getData ); //getData => callback function => getData (which is cb) mein kya pass hoga vo hame fs btayega

// and i.e error and data
function getData(error, data){
   console.log(data+"");
}

//console.log("end");
//output of till line 13
//start
//end
//Hi I am F1

console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");

//output till line 30

// start
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end
// Hi I am F1

// while(true){  // due to infinite loop it will never ever permit callback functn (ready in queue)to push on stack becoz infinite loop does busy gEC forever (kuki abhi tak main file ka code hi khatam nhi hua to kha se chala jayega stack par)
// }

//output with while vaala infinite loop
// start
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end
// end