const express = require("express");
const router = express.Router();
const API_authentication = require("../controllers/authentication.controller");

//Router
//Register
router.post("/register", API_authentication.registerAccount);


//Login
router.post("/login", API_authentication.loginAccount);


module.exports = router;
