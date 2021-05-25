// Promises Chaining => To avoid promise hell !

// Initial State is Pending 
// Either the Pending Promise can be resolved or rejected 
// if Pending Promise is Resolved => success callback is invoked
// if Pending Promise is Rejected => failure callback is invoked

// scb can be attached to pending promise using then function
// fcb can be attached to pending promises using catch function

// then and catch can only be called on pending promises

// then() and catch() functions are async functions ! (inka kaam call stack par chalta h isliye)
// then and catch also returns a pending promise also known as thenKaPromise

const fs = require("fs");
let f1KaPromise = fs.promises.readFile("./f1.txt");

/*
let thanKaPromise = f1KaPromise.then(function(data){
   console.log(data+"");
   // dikkat tab hogi jab ham yha par promisified function ko call lagayenge to hell ban jata hai
});
*/

// thanKaPromise.then(); //thanKaPromise bhi to ek pending promise hai, us par bhi to ham .then() call lga saktein hai 
// ab mein upar ki lines ko comment karke alag tareeke se likhta hun

f1KaPromise.then(function(data){
    console.log(data+"");
    // dikkat tab hogi jab ham yha par promisified function ko call lagayenge to hell ban jata hai
    console.log(f1KaPromise);
 })
 .then(function(returnValueOfscb1){ // bas yahi se chaining start hoti hai 
    
    console.log("I ran after first scb");
 })// This will print in Serial Order
