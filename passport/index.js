const passport = require('passport');
const local = require('./localStrategy');
const bcrypt = require('bcrypt');
const User = require('../database/models/user');

module.exports = () => {
  passport.serializeUser((user,done)=>{ 
    done(null,user);
});
  passport.deserializeUser((user,done)=>{
    done(null,user);
});

  local();
};