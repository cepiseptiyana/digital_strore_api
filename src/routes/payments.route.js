const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/payments.controller.js");

router.get("/", paymentsController.getAllOrders);
router.get("/:id", paymentsController.getOrdersById);
router.post("/", paymentsController.createOrders);
router.put("/:id", paymentsController.update);
router.delete("/:id", paymentsController.remove);

module.exports = router;
