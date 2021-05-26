//khud ke promises kaise bnate hai
const fs = require("fs");

function myPromisifiedFun(filePath){
    //  let pendingPromise = new Promise(); // It will create a new Promise Object // Promise class ka Constructor call ho jata hai
    //  return pendingPromise; // iska address jakar niche jha se call lgi use vaale pendingPromise par save ho jayega
     
    // direct write
    //return new Promise(); // ye hamne constructor ko call lagayi hai // ab isme pass kya hona chahiye ye hame Promise Class ka object hi btayega
    // to is constructor mein ek functrion pass hota hai jiske doo arguments hotein hai scb and fcb ye mujhe Promise class k object n hi btaya

    return new Promise(function(scb,fcb){ // first argument is always for success and sec for failure always
         // iss function mein mujhe apna actual logic likhna hoga 'A' ke side vaala
        
        // async func
        fs.readFile(filePath, function(error, data){ // ye data mujhe fs lakar dega
            // yha par ab hmare haath mein hai ki mujhe kise call lgana hai .then() ko ya .catch() ko
            // to yha par kis basis par kahenge ki which to be called ,on the basis of whether data came or not ( Y ? call to scb:fcb)
            if(error){
                fcb("Data nhi aaya!!!");
            }
            else{
                scb("testing success callback!!!");
            }
        })
    });
}

//we work here as a B // So B says to A f1 file lekar jao or iska data lao
// So A provides us Pending Promise becoz the work can be heavy

//yha par hum A ke Side vaala kaam kareinge
let pendingPromise = myPromisifiedFun("./f1.txt"); // fs.promises.readFile() ye function mein khud ka likhna chahta hu // ye kaise .then() and .catch() ko call lagata hai
console.log(pendingPromise); 


pendingPromise.then( function(data){  // ye .then(scb) ye scb hi uper new Promise( vaale scb mein pass hoga)
    console.log(data+"");
});


pendingPromise.catch( function(error){ // ye .then(fcb) ye fcb hi uper new Promise( vaale fcb mein pass hoga)
    console.log(error);
});