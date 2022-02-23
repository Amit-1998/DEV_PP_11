const Product = require("../models/productModel");

// Create Product
module.exports.createProduct = async (req,res,next)=>{
    const product = Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

module.exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        message: "Route is working fine"
    })
}
