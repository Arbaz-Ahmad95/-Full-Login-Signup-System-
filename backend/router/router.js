const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middleware/auth.js');
const SECRET_KEY = "yourSecretKey";

// Signup
router.post('/signup', async (req, res) => {
   console.log("Signup request received:", req.body);
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Signup error:", err);  // add this line
    res.status(500).json({ message: "Something went wrong" });
}

});

// Protected profile route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: "Welcome user!", userId: req.user.userId });
});

module.exports = router;
