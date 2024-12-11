const express = require('express');
const User = require('./Models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (typeof email !== 'string') {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  try {
    const existingUser = await User.findOne({email:email});
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }
    
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully.', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful.', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});
module.exports = router;