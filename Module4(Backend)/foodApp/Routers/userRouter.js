const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
.get(getUserById);

// functions
// app.get('/user', getUser); // getUser is a callback function
function getUser(req, res) {
    console.log("get User called");
    res.json(user);
}

function createUser(req, res) {
    user = req.body; // server ke paas req object mein milta hai data jo frontend se client ne bheja hota hai
    // console.log(req.body);
    res.send('data has been added successfully'); // server se client par message bhejne ke liye res.send()
}

function updateUser(req, res) {
    // user = req.body;
    // console.log(user); // { age: '10' }
    let obj = req.body; // { age: '10' }
    for (let key in obj) {
        user[key] = obj[key]; // vo key(age) user mein ban jayegi
        // key is age
        // object[key] => 10
        // user[key] ye dekhega ki mere paas to "key" as a key to hai hi nhi to vo sochega acha ye koi variable hai jisme "age" hai to apne ander "age" ko as a key dekhega vo bhi nhi milega to bna dega
    }
    // res.send("data has been updated successfully");
    res.json(user); // {"name":"Amit Kumar","age":"10"}
}

function deleteUser(req, res) {
    user = {};
    res.json(user);
}

function getUserById(req, res) { // req object mein parameters aayenge url ke
    console.log(req.params); // {"id":"1998"}
    res.send(req.params.id); // 1998
    // res.json(req.params.id); // "1998"
}

module.exports = userRouter;