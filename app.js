const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./database/models");
const routes = require("./routes");
const passport = require('passport');
const dotenv = require('dotenv');
const session = require('express-session');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
const env = process.env;
passportConfig(); 

const PORT = env.PORT || 8080;


db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Synced database.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      secure: false,
  },
}));


app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
        
app.get("/", (req, res) => {
  res.json({ Message: "Welcome to 01-Community-H!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = {
  app,
};