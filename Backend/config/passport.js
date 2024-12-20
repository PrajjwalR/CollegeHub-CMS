const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Configure Passport local strategy
passport.use(new LocalStrategy({
  usernameField: 'email', 
  passwordField: 'password', 
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    console.log('User Found:', user);

    if (!user) {
      return done(null, false, { message: 'Invalid credentials' });
    }

    // Compare password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch);
    if (!isMatch) {
      return done(null, false, { message: 'Invalid credentials' });
    }

    return done(null, user); // Authentication successful
  } catch (err) {
    return done(err);
  }
}));


// Serialize user (for sessions)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user (retrieve from session)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
