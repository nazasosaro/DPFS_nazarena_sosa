const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/catalog", productController.catalog);
router.get("/details", productController.details);
router.get("/cart", productController.cart);
router.get("/create", productController.create);
router.get("/edit", productController.edit);

module.exports = router;
