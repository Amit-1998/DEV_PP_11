// In DEV_PP11 folder
// npm init -y
// npm install cheerio

const fs = require("fs"); // brings fs package in fs.js file
const cheerio = require("cheerio"); //Node ka package which knows the Functions of document object

let htmlKaData = fs.readFileSync("./index.html","utf8"); //brings html file ka data in our this Node Application
//console.log(htmlKaData); //We have a stringified html file !!!

//htmlfile is loaded in cheerio
// myDocument naam ka objext mil gya
let myDocument = cheerio.load(htmlKaData); //it needs html ki file

// cheerio is inspired with jquery,so cheerio's functions are somewhere similar with j query

// how to do ye waala kaam document.querySelector("h1");
//let h1Element = myDocument("h1");
//console.log(h1Element); // element => cheerio => object form mein data //it gives some big Object which is nothing but a h1
let h1kaData = myDocument("h1").text();
console.log(h1kaData);