// routes/product.js
const express = require("express");
const router = express.Router();
const API_product = require("../controllers/product.controller");
// const { verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Product (Chỉ admin)
router.post("/", API_product.createProduct);

// Update Product (Chỉ admin)
router.put("/:id",API_product.updateProduct);

// Update product after order (Chỉ admin)
router.put("/:id",  API_product.updateproductafterorder);

// Delete Product (Chỉ admin)
router.delete("/:id",  API_product.deleteProduct);

// Get One Product (Mọi người)
router.get("/find/:id", API_product.findoneProduct);

// Find Product With Name Product (Mọi người)
router.get("/findProduct/:nameproduct", API_product.findproductwithName);

// Get All Product (Mọi người)
router.get("/", API_product.getAllProduct);

// Get Product With Limit Document (Mọi người)
router.get("/limit", API_product.getProductLimit);

// Get Category Product with name (Mọi người)
router.get("/categoryBook/:name", API_product.getcategoryProduct);

// Get Product with ID (Mọi người)
router.get("/editBook/:id", API_product.getproductwithID);

// Get product with id anywhere (Mọi người)
router.get("/:id", API_product.getwithID);

module.exports = router;