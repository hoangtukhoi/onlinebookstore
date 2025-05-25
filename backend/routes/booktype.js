// routes/booktype.js
const express = require("express");
const router = express.Router();
const API_booktype = require("../controllers/booktype.controller");
// const { verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Book Type (Chỉ admin)
router.post("/",  API_booktype.createBookType);

// Update Book Type (Chỉ admin)
router.put("/:id",  API_booktype.updateBookType);

// Delete Book Type (Chỉ admin)
router.delete("/:id", API_booktype.deleteBookType);

// Get All Book Types (Mọi người)
router.get("/", API_booktype.getAllBookType);

// Get Book Type with ID (Mọi người)
router.get("/viewbooktype/:id", API_booktype.getbooktypewithID);

// Find Book Type with Name (Mọi người)
router.get("/findbooktype/:namebooktype", API_booktype.findbooktypewithName);

module.exports = router;