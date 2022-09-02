const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./database/models");
const dotenv = require("dotenv");
// const { swaggerUi, specs } = require("./swagger");
const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes");

dotenv.config();

const app = express();

const env = process.env;
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
