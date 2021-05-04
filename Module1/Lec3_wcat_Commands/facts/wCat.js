const fs = require("fs");
// cat f1.txt => f1 ka content
// cat f1.txt f2.txt => f1 ka content + f2 ka content

//We want to make the work or the output of above two cat commands using fs.

let f1KaData = fs.readFileSync("./f1.txt","utf-8"); // brings the content of file f1.txt
let f2KaData = fs.readFileSync("./f2.txt","utf-8"); // brings the content of file f2.txt

/* console.log(f1KaData);  Not the appropriate metthod to show the contents of Both files
console.log(f2KaData); */

//Instead
//let bothOutput = f1KaData +"\n" + f2KaData;
//console.log(bothOutput);

//flags

// f1kadata
/* -s flag => remove extra spaces */



let removedSpacesString = applySFlag(f1KaData);
// console.log(removedSpacesString);

// -b flag => Add line number to non-Empty lines


let bFlaggedString = applyBFlag(f1KaData);
console.log(bFlaggedString);


//-n flag


console.log( applyNFlag(f1KaData) );
