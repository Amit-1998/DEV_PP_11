// dependencies
const express = require("express");

// router
const reviewRouter = express.Router();
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");

const reviewModel = require("../models/reviewModel");
const { createElement, getElement, getElements, updateElement, deleteElement } = require("../helpers/factory");

// functions
const createreview = createElement(reviewModel);
const getreview = getElement(reviewModel);
const getreviews = getElements(reviewModel);
const updatereview = updateElement(reviewModel);
const deletereview = deleteElement(reviewModel);


// route -> id
// reviewRouter.use(protectRoute);

// routes
reviewRouter.get("/getuseralso", getUsersAlso);

// createReview
// review -> put entry
// plan: average rating update
// plan -> reviewId


reviewRouter.route("/")
  .post(protectRoute, bodyChecker, isAuthorized(["admin"]), createreview)
  .get(protectRoute, isAuthorized(["admin","ce"]), getreviews);

reviewRouter.route("/:id")
  .get(getreview)
  .patch(protectRoute, bodyChecker, isAuthorized(["admin", "ce"]), updatereview)
  .delete(protectRoute, bodyChecker, isAuthorized(["admin"]), deletereview);

async function getUsersAlso(req, res){
    try{    
            // ref ke saath function aata hai populate
            // reviewModel ke kis key ko populate karvana hai use path mein likho means kis chis ke baare mein jyada info nikalni hai
            // fir vo revieModel mein user key ke ander jo id hai vo kis model ki hai us model ki particular chis ko nikalna hai that would comes in select
            let reviews = await reviewModel.find().populate({
               // ek saath do chiso ko bhi populate kra sakte like user and plan both so give path: "user plan"
               path: "user", // is reviewModel mein  "user" key mein jo id hai us ke basis par yaani us id ko ref mein pade model mein find karega ,milne ke baad usmein se jo chise chahiye use select mein likh denge that's it
               select: "name email"
            })
           res.json({
              reviews
           })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server error"
        })
    }
}

module.exports = reviewRouter;