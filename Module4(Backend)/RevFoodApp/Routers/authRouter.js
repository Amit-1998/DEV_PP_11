const express = require("express");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets");
const userModel = require("../model/userModel");
const {bodyChecker} =require("./utilFns");

//router
const authRouter = express.Router();

// routes 
authRouter.route("/signup")
    .post(bodyChecker, signupUser);
authRouter.route("/login")
    .post(bodyChecker, loginUser);


// routes -> functions
async function signupUser(req, res) {
    try {
        let newUser = await userModel.create(req.body);
        res.status(200).json({
            "message": "user created successfully",
            user: newUser
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}

function loginUser(req, res){
    //JWT
}


// function tempLoginUser(req, res) {
//     let { email, password } = req.body;
//     let obj = content.find((obj) => {
//         return obj.email == email
//     })
//     if (!obj) {
//         return res.status(404).json({
//             message: "User not found"
//         })
//     }
//     if (obj.password == password) {
//         var token = jwt.sign({ email: obj.email },
//             JWT_SECRET);
//         // header
//         console.log(token);
//         res.cookie("JWT", token);
//         // sign with RSA SHA256
//         // res body 
//         res.status(200).json({
//             message: "user logged In",
//             user: obj
//         })
//     } else {
//         res.status(422).json({
//             message: "password doesn't match"
//         })
//     }
// }

module.exports = authRouter;