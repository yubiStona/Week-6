require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173", // or your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "authorization token required" });
  }
  try {
    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    // Handle specific JWT errors
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token has expired. Please log in again." });
    } else if (err.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid token. Please provide a valid token." });
    } else {
      return res.status(401).json({ message: "Authentication failed." });
    }
  }
};

app.get("/home", authenticateToken, (req, res) => {
  res.json({ message: "home data is accessed" });
});

app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "profile data accessed!" });
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    //input validation
    if (!username || !password) {
      return res.status(400).json({
        message: "username and password are required",
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const accessToken = jwt.sign(
      {
        username: user.username,
        role: user.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2m" }
    );

    res.json({
      message: "login successful",
      token: accessToken,
      user: {
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
