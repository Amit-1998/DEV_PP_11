// npm init -y
// npm install express
// npm i nodemon -g

const express = require("express");

const app = express(); // issse hmara server create ho gya // express hame ek function deta hai app name se

// ab is server ko listen karvana padega kisi port par
let port = '8080'; // ab koi bhi client isi port ke through server se baat karega
app.listen(port, function(){ // server ko btane ke lie ki ham is port par kaam kar rhe hai to tu ab is port par sun
    console.log(`Server is listening on port No : ${port}`);
});


app.get('/', (req,res)=>{
    console.log(req.hostname); 
    console.log(req.path);  
    console.log(req.method); 
    console.log("hello from home page");
    res.send('<h1>hi hello from Backend</h1>'); // res object itna smart hai vo is passing html ko body mein embed bhi kar dega
});

//types of request -> get, post, put, delete
// app.get('/home', (req,res)=>{ // client ne jab '/home' route par request maari tab
//     // request to mangvaali '/' is route se
//     // console.log(req); // req is a big object
//     // request object object mein chise hmare paas aati hai
//     // response object mein ham chise bhejte hain
//     console.log(req.hostname); // hostname would be localhost
//     console.log(req.path);  // path would be /home
//     console.log(req.method); // method is GET

//     // ab response bhi to bhejna padega
//     res.send('<h1>hello</h1>');
//     // jab hame apne server ka response khatam karna ho to uske liye res.end()
//     res.end();

// })

let obj = { 'name': "Amit" }

// how to send object as a response
app.get('/user', (req, res)=>{
    //  res.send(obj);
     // agar hmare paas json data hai to
     res.json(obj);
});

// agar hame ek line ke bajaye puri file res.send() karni ho tab
app.get('/home', (req, res)=>{
    // how to send a file
    // way1 => puri file ka path (absolute path )chipka do
    // koi bhi frontend hamare backend ke through hi jayega 
    // res.sendFile('G:\DEV_PP_11\Module4(Backend)\foodApp\views\index.html');
    
    // ab ham itna bda path to denge nhi
    // way2(smart) => ./views/index.html is a relative path
    // ./views/index.html ye path to hame path hain ki ye file yha par padi hai but server ko nhi pta na ki system pura path kya hai  
    // ./views/index.html ye to foodApp ke respect mein hai path but pure system mein kha par hai?
    
    console.log(__dirname); // gives us G:\DEV_PP_11\Module4(Backend)\foodApp
    res.sendFile('./views/index.html', {root:__dirname}); // ye directory ka name lekar aayega
});