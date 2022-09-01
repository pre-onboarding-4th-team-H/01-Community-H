const express = require('express');
const passport = require('passport');
const { isNotLoggedIn } = require('./middlewares');
const User = require('../database/models/user');

const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      res.status(400).json({ login:'Invalid User' });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const token = jwt.sign(
        { userEmail: req.body.userEmail },
        process.env.JWT_SECRET_KEY
      );
      res.json({ token });
    });
  })(req, res, next); 
});

module.exports = router;