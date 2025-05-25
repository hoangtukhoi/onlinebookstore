// routes/user.js
const express = require("express");
const router = express.Router();
const API_user = require("../controllers/user.controller");
const { verifyToken, verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create User (Chỉ admin)
router.post("/", verifyTokenAndAdmin, API_user.createUser);

// Update User (Yêu cầu đăng nhập)
router.put("/:id", verifyToken, API_user.updateUser);

// Delete User (Chỉ admin)
router.delete("/:id", verifyTokenAndAdmin, API_user.deleteUser);

// Get All User (Chỉ admin)
router.get("/",  API_user.getAllUser);

// Get User with ID (Yêu cầu đăng nhập)
router.get("/infoUser/:id", verifyToken, API_user.getUserWithID);

// Find User with Name (Chỉ admin)
router.get("/finduser/:nameuser", verifyTokenAndAdmin, API_user.finduserwithName);

// Change Password (Yêu cầu đăng nhập)
router.put("/changepassword/:id", verifyToken, API_user.getUserWithIDChangepass);

module.exports = router;