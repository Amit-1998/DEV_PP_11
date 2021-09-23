const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .get(protectRoute, getUsers)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

userRouter.route('/:id')
.get(getUserById);

// functions
// app.get('/user', getUser); // getUser is a callback function
const userModel = require('../models/userModel'); // db chahiye hoga to vo reuire kar liya for getUsers
async function getUsers(req, res) {
    
       try{
            console.log("get User called");
            // pehle hamne ek user array bnaye the use bhej rhe they server se frontend par
            // ab mongodb mein jo users honge vo idhar aayenge yaani vo bhejenge server se frontend par
            let users = await userModel.find(); // userModel collections mein jitne bhi documents honge sab le aayega
            if(users){
                res.json(users);
            }
            else{
                return res.json({
                    message: "users not found"
                });
            }
       }
       catch(err){
           return res.json({
               message: err.message
            });
       } 
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

// protect Route -> middleware function
let flag = true; // consider initially user is loggedin
function protectRoute(req,res,next){

    try{  // no need to have a flag
        // now user is liggedIn & now he wants to get()
        if(req.cookies){
            if(req.cookies.login=='1234'){
                next(); // user is already loggedIn so he can see the users info call to next middleware function
            }
            else{
                res.json({
                    message: "Not Authorized"
                });
            }
        }
        else{
            res.json({
                message: "Operation not allowed"
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: err.message
        });
    }
}

module.exports = userRouter;