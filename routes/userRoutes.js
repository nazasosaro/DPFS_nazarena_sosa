const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const uploadUserImage = require("../middlewares/uploadUserImage");
const authMiddleware = require("../middlewares/authMiddleware"); 
const userRegisterValidator = require("../middlewares/userRegisterValidator");

router.get("/login", userController.loginForm);
router.post("/login", userController.loginProcess);
router.get("/logout", userController.logout);

router.get("/register", userController.registerForm);
router.post(
  "/register",
  userRegisterValidator,
  uploadUserImage.single("image"),
  userController.registerProcess
);

router.get("/forgot-password", userController.forgotPasswordForm);
router.post("/forgot-password", userController.forgotPasswordProcess);

router.get("/account", authMiddleware, userController.account);
router.post(
  "/account",
  authMiddleware,
  uploadUserImage.single("image"),
  userController.updateAccount
);


module.exports = router;
