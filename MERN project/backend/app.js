const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());
// Route imports : in app.js file import all the routes
const product = require("./routes/productRoute");
app.use("/api/v1",product); // ye string pehle append hogi uske baad mein lagega kuch bhi

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;