const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User.js');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ message: 'Logged in successfully', user });
    });
  })(req, res, next);
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
