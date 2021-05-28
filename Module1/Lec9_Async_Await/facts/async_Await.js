// async => it can be used before a function name !!
// await => it can only be used inside a async function !!

// IIFE => Immediately Invoked Function Expressions !!
/* IIFE function => jinko aate hi khud call lag jaati
(function(){

 })();

 */
const fs = require("fs");

console.log("start");

/* jab tak is callMe() function mein async vaala Kaam nhi hoga tab tak sync vaala kaam hi karega
async function callMe(){
   console.log("Hello World");
   console.log("I am Inside async function");
   let f1KaData = fs.readFileSync("./f1.txt"); //wait hoga jab sync function f1 ka data nhi le aata niche code nhi chalega
}
callMe();
*/

/*
async function callMe(){
    console.log("Hello World");
    console.log("I am Inside async function");
    
    // async vaala kaam
    let f1KaPromise = fs.promises.readFile("./f1.txt");
    f1KaPromise.then();
    f1KaPromise.catch();
    // await ne kha ye .then() aur .catch vaala kaam chodo ab,mujhe promisified function ke aage lagao
 }
 callMe();
*/

// await => ye hamesha pending Promise par lagta hai
/*
async function callMe(){
    console.log("Hello World");
    console.log("I am Inside async function");
    let f1KaData = await fs.promises.readFile("./f1.txt"); // await code promisified function par tab tak ruka rahega jab tak vo data nhi le aata
    // aur ye promise nhi dega ye direct f1KaData lakar dega
    console.log(f1KaData+"");
}
callMe();

console.log("end");
*/

async function callMe(){

    try{
        console.log("Hello World");
        console.log("I am Inside async function");
        let f1KaPP = fs.promises.readFile("./f1.txt","utf8"); 
        let f2KaPP = fs.promises.readFile("./f2.txt","utf8");
        let bothFilesData = await Promise.all( [f1KaPP, f2KaPP] ); // await ek tareeke se tumne then ki call lga di // to fir catch ki call ka kya => uske lie try & catch
        console.log(bothFilesData);
    }
    catch(error){
       // koi bhi ek await fail ho gya to seedha catch mein aayeinge
       console.log(error);
    }
    
}
callMe();

console.log("end");
