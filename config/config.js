const dotenv = require("dotenv");
const env = process.env;

dotenv.config();

module.exports = {
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME_DEVELOPMENT,
    host: env.DB_HOST_DEVLOPMENT,
    dialect: "mysql",
    timezone: "+09:00",
  },
  test: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME_TEST,
    host: env.DB_HOST_TEST,
    dialect: "mysql",
    timezone: "+09:00",
  },
  production: {
    username: env.DB_USERNAME_PRODUCTION,
    password: env.DB_PASSWORD_PRODUCTION,
    database: env.DB_NAME_PRODUCTION,
    host: env.DB_HOST_PRODUCTION,
    dialect: "mysql",
    timezone: "+09:00",
  },
};
