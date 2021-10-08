// dependencies
const express = require("express");

// router
const planRouter = express.Router();
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");

// route -> id
userRouter.use(protectRoute);

// routes
planRouter.route("/")
  .post(bodyChecker, isAuthorized(["admin"]), createPlan);

planRouter.route("/:id")
  .delete(deletePlan);

// functions
async function createPlan(req, res){
    try{
       let user = await planModel.create(req.body);
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

async function deletePlan(req, res){
    let { id } = req.params;
    try{
       let user = await planModel.findByIdAndDelete(id);
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