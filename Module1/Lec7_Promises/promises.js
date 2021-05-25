const fs = require("fs");

// sync function
// async function 
// promisifed function

//we work here as a B // So B says to A f1 file lekar jao or iska data lao
// So A provides us Pending Promise becoz the work can be heavy
let pendingPromise = fs.promises.readFile("./f1.txt" , "utf8"); // f1 can be a heavy data
//console.log(pendingPromise); // Promise { <pending> } i.e state of promise

//hame nhi pta ki A hame data kab dega bas ek promise de diya jo ki abhi pending hai

// promise ka object uske pass do function then() and catch();

// then function attaches a success callback to the pendingPromise
pendingPromise.then( function(data){  // function => is a success callback body (is functio ko call fs.promise lagayega jab data lekar aajayega tab)
    console.log("Inside Sucess callback"); 
    console.log(pendingPromise);
    console.log(data+"");
});

// catch function attaches a failure callback to the pendingPromise
pendingPromise.catch( function(error){ // failure callback
    console.log("Inside failure callback");
    console.log(error);
});

// Note : Always remember then() and catch() ke andar vaala callback function is a Sync Function
// But then() and catch() khud async functions hai

