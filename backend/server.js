const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

console.log(process.env.MONGO_URI);

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    res.json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});