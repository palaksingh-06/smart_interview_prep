const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  experience: String,
  otp: String,
otpExpiry: Date,
isOtpVerified: {
  type: Boolean,
  default: false,
}
});

module.exports = mongoose.model("User", userSchema);