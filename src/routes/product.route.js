const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller.js");

router.get("/", productController.getAllUsers);
router.get("/:id", productController.getUserById);
router.post("/", productController.createProduct);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

module.exports = router;
