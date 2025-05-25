// routes/order.js
const express = require("express");
const router = express.Router();
const API_order = require("../controllers/order.controller");
// const { verifyToken, verifyTokenAndAdmin } = require("../middleware/auth");

// Router
// Create Oder (Yêu cầu đăng nhập)
router.post("/",  API_order.createOrder);

// Get All Order (Chỉ admin)
router.get("/",  API_order.getAllOrder);

// Update Order (Yêu cầu đăng nhập)
router.put("/infoUser/:id",  API_order.updateOrder);

// Update order admin (Chỉ admin)
router.put("/editorder/:id", API_order.updateOrderAdmin);

// Get Data Order with ID send (Yêu cầu đăng nhập)
router.get("/detailorder/:id",  API_order.getDataOrderWithID);
//delete
router.delete("/:id", API_order.deleteOrder);
// Get Data Order with ID user (Yêu cầu đăng nhập)
router.get("/infoUser/:id",  API_order.getDataOrderWithIDUser);

// Get Data Order with ID order (Yêu cầu đăng nhập)
router.get("/:id", API_order.getDataOrderWithIDOrder);

// Find order with id (Yêu cầu đăng nhập)
router.get("/findOrder/:id",  API_order.findorderwithID);

// Get data order with status order (Chỉ admin)
router.get("/filterStatusOrder/:name",  API_order.getorderwithstatusorder);

module.exports = router;