// postman par request methods ke liye

const express = require('express');
const app = express();

app.listen('5000', function(){
    console.log('server listening on port 5000');
});

app.use(express.json()); // use this line before using any kind of requests //  to recognize the incoming Request Object as a JSON Object

let user = {};

// hamesha client ke perspective se dekho

// C.R.U.D operations = create, read, update and delete
// 1) Create by post request
// 2) Read by get request
// 3) Update by patch request
// 4) delete by delete request 

// get request => when client data mangvaata hai server se
// client <- server
app.get('/', (req, res)=>{
    res.send('Home Page');
});

app.get('/user', (req, res)=>{
    // res.send('user');
    res.json(user); // json format mein data mangvaaya server se
});

// post request -> koi bhi data bhejne ke liye we use post request 
// client -> server (when client sends data to the server )

app.post('/user', (req, res)=>{
    user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
    // console.log(req.body);
    res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()

});

// patch request method -> koi bhi chis update karne ke liye client -> server
app.patch('/user', (req, res)=>{
      // user = req.body;
      // console.log(user); // { age: '10' }
      let obj = req.body; // { age: '10' }
      for(let key in obj){
          user[key] = obj[key]; // vo key(age) user mein ban jayegi
          // key is age
          // object[key] => 10
           // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
      }
      // res.send("data has been updated successfully");
      res.json(user); // {"name":"Amit Kumar","age":"10"}
});

// rough work
// let user = {name: "Amit"};
// let object = {age: "10"};

// for(let key in object){
//     user[key] = object[key];
//     // key is age
//     // object[key] => 10
//     // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
// }

// delete request -> used to delete the user
app.delete('/user', (req, res)=>{
    user = {};
    res.json(user);
});

// param route
// req.params => ismein object aata hai
app.get('/user/:id',(req, res)=>{
    console.log(req.params); // {"id":"1998"}
    res.send(req.params.id); // 1998
    // res.json(req.params.id); // "1998"
});