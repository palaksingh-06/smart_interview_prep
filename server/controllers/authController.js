const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// MAIL CONFIG
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// =======================
//  SIGNUP
// =======================
exports.signupUser = async (req, res) => {
  const { name, email, password, role, experience } = req.body;

  try {
    if (!name || !email || !password || !role || !experience) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({
        message: "Name should contain only letters",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters with uppercase, lowercase, number & special character",
      });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      experience,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};


// =======================
//  LOGIN
// =======================
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// =======================
// FORGOT PASSWORD (SEND OTP)
// =======================
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const otp = crypto.randomInt(100000, 999999).toString();

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 min (better for testing)
    user.isOtpVerified = false;

    await user.save();

  await transporter.sendMail({
  from: `"HireAce" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Password Reset",

  text: `
Hello,

We received a request to reset your password.

Your One-Time Password (OTP) is:

${otp}

This OTP is valid for 5 minutes.

If you did not request this, please ignore this email.

Thank you,
HireAce 
  `,

  html: `
  <div style="font-family:Arial,sans-serif; padding:20px;">
    <h2 style="color:#4B3935;">Reset Your Password</h2>

    <p>Hello,</p>

    <p>We received a request to reset your password.</p>

    <p>Your One-Time Password (OTP) is:</p>

    <div style="
      font-size:24px;
      font-weight:bold;
      letter-spacing:5px;
      background:#F0E7D5;
      padding:10px;
      display:inline-block;
      border-radius:8px;
      color:#4B3935;
    ">
      ${otp}
    </div>

    <p style="margin-top:20px;">
      This OTP is valid for <b>5 minutes</b>.
    </p>

    <p>If you did not request this, you can safely ignore this email.</p>

    <br/>

    <p>Regards,<br/><b>HireAce</b></p>
  </div>
  `,
});

    res.json({ message: "OTP sent to email" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error sending OTP" });
  }
};


// =======================
// VERIFY OTP
// =======================
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.otp !== otp.toString()) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // ✅ MARK VERIFIED
    user.isOtpVerified = true;
    await user.save();

    res.json({ message: "OTP verified" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// =======================
//  RESET PASSWORD
// =======================
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    //  ONLY CHECK VERIFIED FLAG (NOT OTP AGAIN)
    if (!user || !user.isOtpVerified) {
      return res.status(400).json({ message: "OTP not verified" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    //  CLEAR EVERYTHING
    user.otp = null;
    user.otpExpiry = null;
    user.isOtpVerified = false;

    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};