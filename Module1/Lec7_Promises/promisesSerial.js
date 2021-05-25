// Serially read contents of f1 f2 and f3 using promisified function
//ek content aane ke baad hi mujhe agla content chahiye (in Serial)

const fs = require("fs");

// promise hell

let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data+"");
   
    let f2KaPromise = fs.promises.readFile("./f2.txt"); //kal ko yha par ham kisi API ko call laga rhe honge which is a heavy work,So it is possible ki uper f1 mein aaya hua data is mein use hona ho
    f2KaPromise.then(function(data){
        console.log(data+"");

        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data+"");
        });
    });
});

//promises aye they callback hell se bachne ke liye 
// But yha to promises hell ho gya
// to promises hell se kaise bacha jaye ?

// So promises hell se bachne ke liye ek techinique hoti hai jise kehte hai chaining



