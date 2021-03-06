const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create Product -- admin
// module.exports.createProduct = async(req,res,next)=>{
//     const product = await Product.create(req.body);
//     res.status(201).json({
//         success: true,
//         product
//     })
// }

// Create Product -- admin
module.exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});


// module.exports.getAllProducts = (req,res)=>{
//     res.status(200).json({
//         message: "Route is working fine"
//     })
// }

// Get all the products
module.exports.getAllProducts = catchAsyncErrors(async(req,res)=>{
    let resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage); 
    // const products = await Product.find(); // gives all products // now we will not use Product.find()
    //Now after using apiFeature
    // console.log(apiFeature.query);
    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products
    });
});

//Get Single Product OR
// Get product details
module.exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        // return res.status(500).json({
        //     success:false,
        //     message:"Product not found"
        // })
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product,
        productCount
    });
});

// update the product -- admin
module.exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{
      let product = await Product.findById(req.params.id);
      if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

      product = await Product.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true,
          useFindAndModify:false
      });

      res.status(200).json({
          success: true,
          product
      })
});

// Delete Product -- admin
module.exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    });
});