const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
exports.signupUser = async (req, res) => {
  const { name, email, password, role, experience } = req.body;

  try {
    // 🔴 1. Check empty fields
    if (!name || !email || !password || !role || !experience) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔤 2. Name validation (only letters & spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({
        message: "Name should contain only letters",
      });
    }

    // 📧 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // 🔐 4. Password validation (strong password)
    // min 6 chars, at least 1 letter & 1 number
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/;
if (!passwordRegex.test(password)) {
  return res.status(400).json({
    message: "Password must be at least 6 characters with uppercase, lowercase, number & special character",
  });
}

    // 🔁 5. Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 🔒 6. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 7. Save user
    const user = await User.create({
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
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};
// LOGIN
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};