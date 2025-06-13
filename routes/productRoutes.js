const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.get("/details/:id", productController.details);

router.get("/create", productController.create); // muedtra el formulario
router.post("/", productController.store) // guardado del producto

router.get("/cart", productController.cart);
router.get("/edit", productController.edit);

module.exports = router;
