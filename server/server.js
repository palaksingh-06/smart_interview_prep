const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
connectDB(); 
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

