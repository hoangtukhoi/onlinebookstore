// routes/author.js
const express = require("express");
const router = express.Router();
const API_author = require("../controllers/author.controller");
// const { verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Author (Chỉ admin)
router.post("/", API_author.createAuthor);

// Update Author (Chỉ admin)
router.put("/:id",  API_author.updateAuthor);

// Delete Author (Chỉ admin)
router.delete("/:id",  API_author.deleteAuthor);

// Get All Authors (Mọi người)
router.get("/", API_author.getAllAuthor);

// Get Author with ID (Mọi người)
router.get("/viewAuthor/:id", API_author.getauthortwithID);

// Find Author with Name (Mọi người)
router.get("/findAuthor/:nameauthor", API_author.findauthorwithName);

module.exports = router;