 const mongoose = require("mongoose");

 const productSchema = new mongoose.Schema({
     name:{
         type: String,
         required: [true,"Please Enter product's Name"]
     },
     description:{
         type: String,
         required: [true, "Please Enter product's description"]
     },
     price:{
         type: Number,
         required: [true,"Please Enter product's price"],
         maxlength: [8, "Price cannot exceeds 8 figures"]
     }
 })