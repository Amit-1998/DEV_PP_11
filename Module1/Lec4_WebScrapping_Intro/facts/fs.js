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

//let pTagsKaData = myDocument("p").text();
//console.log(pTagsKaData); //gives both p tags ka data in appended form

//let secondPTag = myDocument("p")["1"];
//console.log(secondPTag.text()); // can't do like this as this is not the first object i.e initialize it is nested

//we can acces seconPtag by passing it in myDocument and then could call text()
//console.log(myDocument(secondPTag).text());

//Now it's not the good thing to work on goes to keys of initiaze object repeatively
// So here is concept comes up i.e selectors

//Selectors
console.log(myDocument("ul p").text()); //it will give all the p tags insile ul

//a tags
console.log(myDocument("a").text()); //Go to pepcoding.comGo to Google.comGo to youtube.com

console.log(myDocument("ul a").text()); //Go to Google.comGo to youtube.com

// you will get all a tags inside li tags
console.log(myDocument("ul li a").text()); //Go to Google.com

//only direct child
console.log(myDocument("ul>a").text()); //Go to youtube.com

//classes (dot) and ids
//classes => using dot
console.log( myDocument(".inside").text()); //Hey i am the main p tag !!!Hey i am a p tag inside ul
//.inside is accessing the class named "inside"

console.log( myDocument(".inside.main").text()); //Hey i am the main p tag !!!

//ids => ids given are unique in whole html file
// using #
console.log( myDocument("#main-heading").text()); //Heading 2

