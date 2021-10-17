// dependencies
const express = require("express");

// router
const bookingRouter = express.Router();
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");

const bookingModel = require("../models/bookingModel");
const planModel = require("../models/planModel");
// const factory = require("../helpers/factory");

const { createElement, getElement, getElements, updateElement, deleteElement } = require("../helpers/factory");
const razorpay = require("razorpay");

// functions
// for doing createBookings -> we have to change in bookingModel as well as change in userModel -> change user
// for doing deleteBookings -> we have to change in bookingModel as well as change in userModel -> change user

// only we have to write createBookings and deleteBookings functions ,else other functions would remain same as reviewRouter 
const initiatebooking = createElement(bookingModel);
const getbooking = getElement(bookingModel);
const getbookings = getElements(bookingModel);
const updatebooking = updateElement(bookingModel);
const deletebooking = deleteElement(bookingModel);


// route -> id
bookingRouter.use(protectRoute);

// routes
bookingRouter.get("/getuseralso", getUsersAlso);

bookingRouter.route("/")
  .post(bodyChecker, isAuthorized(["admin"]), initiatebooking)
  .get(protectRoute, isAuthorized(["admin","ce"]), getbookings);

bookingRouter.route("/:id")
  .get(getbooking)
  .patch(bodyChecker, isAuthorized(["admin", "ce"]), updatebooking)
  .delete(bodyChecker, isAuthorized(["admin"]), deletebooking);

const initiatebooking = async function(req, res){
    try{
        let booking = await bookingModel.create(req.body);
        let bookingId  = booking["_id"]; // is bookingId ko userModel mein bhi daaldo
        let userId = req.body.user;
        let user = await userModel.findById(userId);
        user.bookings.push(bookingId);
        await user.save();
        // itne tak booking abhi hui nhi hai

        res.status(200).json({
           message: "booking created",
           booking: booking
        })
    }
    catch(err){
         res.status(500).json({
             message: err.message
         })
    }
}

const deleteBooking = async function(req, res){
    try{
        let booking = await bookingModel.findByIdAndDelete(req.body.id);
        console.log("booking", booking);
        let userId = booking.user;
        let user = await userModel.findById(userId);
        let idxOfbooking = user.bookings.indexOf(booking["_id"]);
        user.booking.splice(idxOfbooking, 1);
        await user.save();

        res.status(200).json({
           message: "booking deleted",
           booking: booking
        })
    }
    catch(err){
         res.status(500).json({
             message: err.message
         })
    }
}

async function getUsersAlso(req, res){
    try{    
            // ref ke saath function aata hai populate
            // bookingModel ke kis key ko populate karvana hai use path mein likho means kis chis ke baare mein jyada info nikalni hai
            // fir vo revieModel mein user key ke ander jo id hai vo kis model ki hai us model ki particular chis ko nikalna hai that would comes in select
            let bookings = await bookingModel.find().populate({
               // ek saath do chiso ko bhi populate kra sakte like user and plan both so give path: "user plan"
               path: "user", // is bookingModel mein  "user" key mein jo id hai us ke basis par yaani us id ko ref mein pade model mein find karega ,milne ke baad usmein se jo chise chahiye use select mein likh denge that's it
               select: "name email"
            })
           res.json({
              bookings
           })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server error"
        })
    }
}

module.exports = bookingRouter;