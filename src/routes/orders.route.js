const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders.controller.js");

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrdersById);
router.post("/", orderController.createOrders);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.remove);

module.exports = router;
