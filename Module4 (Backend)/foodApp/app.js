const express = require("express");

const app = express(); // issse hmara server create ho gya // express hame ek function deta hai app name se

// ab is server ko listen karvana padega kisi port par
let port = '8080'; // ab koi bhi client isi port ke through server se baat karega
app.listen(port, function(){ // server ko btane ke lie ki ham is port par kaam kar rhe hai to tu ab is port par sun
    console.log(`Server is listening on port No : ${port}`);
});

//types of request -> get, post, put, delete
app.get('/home', (req,res)=>{ // client ne jab '/home' route par request maari tab
    // request to mangvaali '/' is route se
    // console.log(req); // req is a big object
    // request object object mein chise hmare paas aati hai
    // response object mein ham chise bhejte hain
    console.log(req.hostname); // hostname would be localhost
    console.log(req.path);  // path would be /home
    console.log(req.method); // method is GET

    // ab response bhi to bhejna padega
    res.send('<h1>hello</h1>');
    // jab hame apne server ka response khatam karna ho to uske liye res.end()
    res.end();

})

