require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./database/models");

const routes = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
const env = process.env;
const PORT = env.PORT || 10000;

db.sequelize
  .sync({ alter: true })
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
app.use(routes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ Message: "Welcome to 01-Community-H!" });
});
// app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
