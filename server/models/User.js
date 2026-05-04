const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  experience: String,
});

module.exports = mongoose.model("User", userSchema);