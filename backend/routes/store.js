// routes/store.js
const express = require("express");
const router = express.Router();
const API_store = require("../controllers/store.controller");
// const { verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Store (Chỉ admin)
router.post("/",  API_store.createStore);

// Update Store (Chỉ admin)
router.put("/:id",  API_store.updateStore);

// Get All Store (Chỉ admin)
router.get("/admin",  API_store.getAllStore);

// Get Store with ID (Mọi người)
router.get("/:id", API_store.getStorewithID);

// Get Store Sort (Mọi người)
router.get("/", API_store.getStoreSort);

module.exports = router;