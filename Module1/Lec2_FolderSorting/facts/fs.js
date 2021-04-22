// fs -> file system ka Use

const fs = require("fs");
//console.log(fs);


// let f1kadata = fs.readFileSync("./f1.txt", "utf-8");

// OR we don't want to provide the format of readed file

let f1kadata = fs.readFileSync("./f1.txt"); //in Same path
console.log(f1kadata + ""); //Stringify the data

fs.writeFileSync("./index.txt","Hello I am index!!")