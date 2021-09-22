const express = require('express');
const authRouter = express.Router();

authRouter.route('/signup')
.post(setCreatedAt, signupUser); // setCreatedAt is a middleware which runs before signupUser

authRouter.route('/forgetPassword')
.get(getForgetPassword)
.post(postForgetPassword, validateEmail); // postForgetPassword iske andar next() call par agla middleware function i.e validateEmail hamne saath mein hi pass kar dia 

/* ---------------functions----------------------- */

// middleware function
function setCreatedAt(req,res,next){
    let obj = req.body;
    // keys ka arr -> uska length
    let length = Object.keys(obj).length; // Obj ki keys lekar aao jo ki hame ek array dega uski length nikal lo
    if(length==0){
        return res.status(400).json({message: "cannot create user if req.body is empty"});
    }
    req.body.createdAt = new Date().toISOString();
    next();
}

const userModel = require('../models/userModel');

async function signupUser(req, res) {
    // let userDetails = req.body;
    // let name = userDetails.name;
    // let email = userDetails.email;
    // let password = userDetails.password;
    try{
        // let { name, email, password } = req.body; ab aise nhi nikalenge
        let userObj = req.body; // user ka data frontend se aayega
        // user.push({ name, email, password });
        // ab se put all data in mongo db
        let user = await userModel.create(userObj);
        // console.log('user', req.body);
        res.json({
            message: 'user signedUp',
            user: userObj
        });
    }
    catch(err){
        console.log(err);
        res.json({message: err.message});
    }
}

function getForgetPassword(req, res){
    res.sendFile('./public/forgetPassword.html', {root:__dirname});
}

function postForgetPassword(req, res,next){
    let data = req.body;
    console.log('data', data);
    // check if emailid is correct - validate(emailid hi di hai ya kuch bhi likh dia)
    next(); // next middleware function par jao
 
    // check if user exists in db
    // so response bhejne se pehle hame ek check lgana hoga
 //    res.json({
 //        message: "data received",
 //        data: data.email
 //    })
 }

 function validateEmail(req, res){
    // req.body mein vhi aata hai jo postForgetPassword ki req.body mein aata hai
    console.log("in validateEmail function");
    console.log(req.body);
    // how to check if email is correct or not -> @ , .
     res.json({
           message: "data received",
           data: req.body
        })
 }

module.exports = authRouter;