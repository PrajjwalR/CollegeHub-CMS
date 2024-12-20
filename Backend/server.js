const express = require('express')
const session = require('express-session');
const authRoutes = require('./routes/auth.js');// Importing auth routes
const passport = require('passport');
require('./config/passport');  // Passport configuration
const dashboardRoutes = require('./routes/dashboard.js'); // Importing protected routes
const connectDB = require('./config/db.js')
const itemModel = require('./models/Item.js')
const cors = require('cors')
const User = require('./models/User.js')
require('dotenv').config();
const PORT = process.env.PORT || 8080 

const app = express()


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())


// Express session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
  })
);

// Initializing Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use auth routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes); // Mount protected routes

connectDB()

app.use('/', authRoutes);

app.post('/register', async (req, res)=>{
    try{
      console.log('Received data:', req.body)
      const {name, email, password} = req.body
      console.log("Extracted field", {name, email, password});
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
})

app.listen(PORT, ()=>{
    console.log(`App is running ${PORT}`);
})