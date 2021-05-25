//hamare paas teen filein padi hai, hame teeno ka data lekar aana hain but promisified function se
//parallely read contents of files f1,f2 and f3 using promisified function

const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt"); // tum jao f1 ka data lao // But hame data nhi milega,promise milega joki pending hoga
f1KaPromise.then(function(data){ //data (promisified function) fs.promises.readFile("./f1.txt") ye hi daga isko
    console.log(data+"");
 });
 

let f2KaPromise = fs.promises.readFile("./f2.txt"); // tum jao f2 ka data lao
f2KaPromise.then(function(data){
    console.log(data+"");
});

let f3KaPromise = fs.promises.readFile("./f3.txt"); // tum jao f3 ka data lao
f3KaPromise.then(function(data){
    console.log(data+"");
});