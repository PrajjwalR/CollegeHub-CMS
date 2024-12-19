const express = require('express');
const ensureAuthenticated = require('../middlewares/auth.js');

const router = express.Router();

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.json({ message: `Welcome to the dashboard, ${req.user.name}!` });
});

router.get('/profile', ensureAuthenticated, (req, res)=>{
    res.json({
        message: 'This is your profile page',
        user: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    },
    })
})

module.exports = router;
