const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/uploadProductImage");
const productValidator = require("../middlewares/productValidator");
const productEditValidator = require("../middlewares/productEditValidator");

router.get("/", productController.products);
router.get("/details/:id", productController.details);

router.get("/create", productController.create); // muedtra el formulario
router.post(
  "/",
  productValidator,
  upload.single("image"),
  productController.store
); // guardado del producto

router.get("/edit/:id", productController.edit);
router.put(
  "/:id",
  productEditValidator,
  upload.single("image"),
  productController.update
);

router.get("/cart", productController.cart);

module.exports = router;
