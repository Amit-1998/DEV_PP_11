// dependency
const express = require("express");
const userModel = require("../models/userModel");

// router
const userRouter = express.Router();
const { protectRoute, bodyChecker } = require("./utilFns");

// routes -> id
userRouter.use(protectRoute);
let authCheckerCE = isAuthorized(["admin", "ce"]);
let authChecker = isAuthorized(["admin"]);

// routes
userRouter.route('/')
  .post(bodyChecker, authChecker, createUser)
   // localhost/user -> get
  .get(protectRoute, authChecker, getUsers);

userRouter.route("/:id")
  .get(getUser)
  .patch(bodyChecker, authCheckerCE, updateUser)
  .delete(bodyChecker, authChecker, deleteUser)

// functions
async function createUser(req, res){
    try{
       let user = await userModel.create(req.body);
       res.status(200).json({
           user: user
       })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        })
    }
}

async function getUser(req, res){
    let { id } = req.params;
    try{
        let user = await userModel.findById(id);
        res.status(200).json({
            "message": user
        })
    }
    catch(err){
        res.status(502).json({
            message: err.message
        })
    }
}

async function getUsers(req, res) {
    try {
        let users = await userModel.find();
        res.status(200).json({
            "message": users
        })
    } catch (err) {
        res.status(502).json({
            message: err.message
        })
    }
}

async function updateUser(req, res){
    let { id } = req.params;
    try{
        if (req.body.password || req.body.confirmPassword) {
            return res.json({
                message: "use forget password instead"
            })
        }
       let user = await userModel.findById(id);
       if(user){
           for(let key in user){
               user[key] = req.body[key];
           }
           // save -> confirm, password
           await user.save({
               validateBeforeSave: false
           });
           res.status(200).json({
               user: user
           });
        }
       else{
          res.status(404).json({
              message: "user not found"
          })  
       }
    } 
    catch(err){
         console.log(err);
         res.status(500).json({
             message: "Server error"
         });
    }
}

async function deleteUser(req, res){
     let { id } = req.params;
     try{
        let user = await userModel.findByIdAndDelete(id);
        res.status(200).json({
            user: user
        });
     }
     catch(err){
         console.log(err);
         req.status(500).json({
             message: "Server error"
         });
     }
}

function isAuthorized(roles){
    console.log("I will run when the server is started");
    // function call
    return async function(req, res){
        console.log("I will run when a call is made ");
        let { userId } = req;
        // id -> user get, user role
        try{
           let user = userModel.findById(userId);
           let userisAuthorized = roles.includes(user.role);
           if(userisAuthorized){
               req.user = user;
               next();
           }
           else{
               req.status(200).json({
                   message: "user not authorized"
               })
           }

        }
        catch(err){
            console.log(err);
            res.status(500).json({
                message: "Server error"
            })
        }
    }
}

module.exports = userRouter;
