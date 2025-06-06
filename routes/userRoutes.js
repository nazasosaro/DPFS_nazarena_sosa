const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.loginForm);
router.post("/login", userController.loginProcess);

router.get("/register", userController.registerForm);
router.post("/register", userController.registerProcess);

module.exports = router;
