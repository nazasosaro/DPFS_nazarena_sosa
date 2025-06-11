const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.loginForm);
router.post("/login", userController.loginProcess);

router.get("/register", userController.registerForm);
router.post("/register", userController.registerProcess);

router.get("/forgot-password", userController.forgotPasswordForm);
router.post("/forgot-password", userController.forgotPasswordProcess);

router.get("/account", userController.account);

module.exports = router;
