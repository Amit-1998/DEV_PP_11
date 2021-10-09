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
reviewRouter.use(protectRoute);

// routes
reviewRouter.route("/")
  .post(bodyChecker, isAuthorized(["admin"]), createreview)
  .get(protectRoute, isAuthorized(["admin","ce"]), getreviews);

reviewRouter.route("/:id")
  .get(getreview)
  .patch(bodyChecker, isAuthorized(["admin", "ce"]), updatereview)
  .delete(bodyChecker, isAuthorized(["admin"]), deletereview);

module.exports = reviewRouter;