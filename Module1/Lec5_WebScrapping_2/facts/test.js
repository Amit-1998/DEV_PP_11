let fs = require("fs");

// this is js ka object
let obj = [{
    "Runs" : "10" ,
    "Balls" : "2"
}]

 let jsonObj = JSON.stringify(obj)
 fs.writeFileSync("./a.json" , jsonObj);

let jsonobj = fs.readFileSync("./a.json");
console.log(jsonObj+""); // [{"Runs":"10","Balls":"2"}] in form of String

// How can just abpve be converted into form of object

let ob = JSON.parse(fs.readFileSync("./a.json"));
console.log(ob); // [ { Runs: '10', Balls: '2' } ]  in form of an object