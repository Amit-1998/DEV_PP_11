const express = require("express");
const app = express();

app.use(express.json());
// Route imports : in app.js file import all the routes
const product = require("./routes/productRoute");
app.use("/api/v1",product);

module.exports = app;