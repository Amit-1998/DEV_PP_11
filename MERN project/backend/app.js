const express = require("express");
const app = express();

app.use(express.json());
// Route imports : in app.js file import all the routes
const product = require("./routes/productRoute");
app.use("/api/v1",product); // ye string pehle append hogi uske baad mein lagega kuch bhi

module.exports = app;