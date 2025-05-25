// routes/category.js
const express = require("express");
const router = express.Router();
const API_category = require("../controllers/categories.controller");
// const { verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Category (Chỉ admin)
router.post("/",  API_category.createCategory);

// Update Category (Chỉ admin)
router.put("/:id", API_category.updateCategory);

// Delete Category (Chỉ admin)
router.delete("/:id", API_category.deleteCategory);

// Get All Category (Mọi người)
router.get("/", API_category.getAllCategory);

// Get Category with ID (Mọi người)
router.get("/viewCategory/:id", API_category.getcategorytwithID);

// Find Category with name of category (Mọi người)
router.get("/findCategory/:namecategory", API_category.findcategorywithName);

module.exports = router;