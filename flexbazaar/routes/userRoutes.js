const express = require('express');
const router = express.Router();

// POST /api/users/register - Simulate user registration
router.post('/register', (req, res) => {
  console.log('Register request body:', req.body);
  const { email, password, fullName, confirmPassword } = req.body;

  // Basic validation
  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  // Simulate user creation
  res.status(201).json({ 
    message: "User registered successfully (simulated)", 
    userId: Date.now(), // Simulate a new user ID
    fullName: fullName,
    email: email 
  });
});

// POST /api/users/login - Simulate user login
router.post('/login', (req, res) => {
  console.log('Login request body:', req.body);
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Simulate successful login
  res.status(200).json({ 
    message: "Login successful (simulated)", 
    token: "dummy-jwt-token-" + Date.now(), // Simulate a JWT token
    email: email 
  });
});

module.exports = router;
