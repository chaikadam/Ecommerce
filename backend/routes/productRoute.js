const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products",(req,res)=>{res.send("hello")});

router.route("/products").get(getAllProducts);

router.route("/products").post(createProduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);




module.exprts = router