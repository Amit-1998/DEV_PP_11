 const mongoose = require("mongoose");

 const productSchema = new mongoose.Schema({
     name:{
         type: String,
         required: [true,"Please Enter product's Name"],
         trim: true
     },
     description:{
         type: String,
         required: [true, "Please Enter product's description"]
     },
     price:{
         type: Number,
         required: [true,"Please Enter product's price"],
         maxlength: [8, "Price cannot exceeds 8 figures"]
     },
     rating:{
         type: Number,
         default: 0
     },
     images: [
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
     ],
     category:{
         type: String,
         required: [true, "Please Enter product Category"],
     },
     Stock:{
         type: Number,
         required: [true,"Please Enter product Stock"],
         maxlength: [4,"Stock cannot exceed 4 figures"],
         default: 1
     },
     noOfReviews:{
         type: Number,
         default: 0
     },
     reviews:[
         {
            name:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true,
            },
            comment:{
                type: String,
                required: true
            } 
         }
     ],
     createdAt:{
         type:Date,
         default: Date.now
     }

 })

 module.exports = mongoose.model("Product",productSchema);