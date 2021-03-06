// dependies
const express = require("express");
const jwt = require('jsonwebtoken');

//deployed -> when our project will deployed than JWT_SECRET will get from process.env
// require -> local file
// const { JWT_SECRET } = process.env || require("../secrets");
const { JWT_SECRET } = process.env
const userModel = require("../models/userModel");
const { bodyChecker } = require("./utilFns");

const emailSender = require("../helpers/emailSender");
//router
const authRouter = express.Router();

// routes 
// authRouter.route("/signup")
//     .post(bodyChecker, signupUser);

authRouter.use(bodyChecker)
authRouter.route("/signup")
  .post(signupUser);

// authRouter.route("/login")
//     .post(bodyChecker, loginUser);
authRouter.route("/login")
 .post(loginUser);

authRouter.route("/forgetPassword")
 .post(forgetPassword);

authRouter.route("/resetPassword")
 .post(resetPassword);

// routes -> functions
async function signupUser(req, res) {
    try {
        // let password = req.body.password;
        // const salt = await bcrypt.genSalt(10); // random text dega-> more the value of salt ,more time it takes to encrypt the plaintext
        // jab user pehli baar create hoga tab ham uska salt generate karenge before saving that user into DB
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

async function loginUser(req, res){
    //JWT
    try{
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        console.log(user);
        if (user) {
            // password
            // not need to check by if(user.password == password)
            // apne aap decrypt ho raha hai hash hua password, compare mein
            let areEqual = await bcrypt.compare(password, user.password); // here password is which user provides while login & user.password is hash hua BE mein saved password
                if (areEqual){
                    let token = jwt.sign({ id: user["_id"] }, JWT_SECRET)
                    res.cookie("JWT", token);
                    res.status(200).json({
                        data: user,
                        message: "user logged In"
                    })
                } 
                else {
                    res.status(404).json({
                        message: "email or password is incorrect"
                    })
                }
        } 
        else
        {
            res.status(404).json({
                message:
                    "user not found with creds"
            })
        }
    }

    catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }

}

async function forgetPassword(req,res){
    try{
        let { email } = req.body;
        // search on the basis of email
        let user = await userModel.findOne({email});
        if(user){
            let token = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            // date.now -> 300
            let updateRes = await userModel.updateOne({ email }, { token});
            let newUser = await userModel.findOne({ email });
             // console.log("newUser", newUser)
            // email
            // email send
            await emailSender(token, user.email);
            res.status(200).json({
                message: "user token send to your email",
                user: newUser,
                token
            })
        }
        else{
            res.status(404).json({
                message:
                    "user not found with creds"
            })
        }
        // create token
        // -> update the user with a new token 
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}

async function resetPassword(req, res){
    // token,confirmPassword,password
    // 10 lakh -> 10 lakh users
    // frontend -> local storage 
    try{
        let { token, confirmPassword, password } = req.body;
        let user = await userModel.findOne({token});
        if(user){
            // await userModel.updateOne({ token }, {
            //     token: undefined,
            //     password: password,
            //     confirmPassword: confirmPassword,
            // },{runValidators:true} )
            
            // server
            user.resetHandler(password, confirmPassword);
            // database entry
            await user.save();
            let newUser = await userModel.findOne({email: user.email});
            // console.log("newUser", newUser)
            // email
            // email send
            // await emailSender(token, user.email);
            res.status(200).json({
                message: "user token send to your email",
                user: newUser,
            })
        }
        else{
            res.status(404).json({
                message: "user with this token not found"
            })
        }
    }
    catch(err){
       console.log(err);
       req.status(500).json({
           message: err.message
       })
    }
}

//forget
//reset

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