const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/authController");
const authController = require("../controllers/authController");
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-otp", authController.verifyOtp);
router.post("/reset-password", authController.resetPassword);

module.exports = router;