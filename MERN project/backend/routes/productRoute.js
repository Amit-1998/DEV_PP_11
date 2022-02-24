const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

//route for Get All Products
router.route("/products").get(getAllProducts);
// route for create a product -- Admin
router.route("/product/new").post(createProduct);
// route for update the product -- Admin
router.route("/product/:id").put(updateProduct);
// route for delete the product -- Admin
// router.route("/product/:id").put(updateProduct).delete(deleteProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;