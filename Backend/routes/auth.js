const express = require('express');
// const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  console.log('Register route hit');

  const { name, email, password } = req.body;
  console.log('Request Body:', req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log('Hashed Password:', hashedPassword);

    user = new User({ name, email, password });
    await user.save();
    console.log('User saved:', user);

    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Server Error:', err);
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
    console.log('Login Request:', req.body);

  })(req, res, next);
});


// Logout route

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;

