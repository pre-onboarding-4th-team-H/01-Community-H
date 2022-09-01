const development = {
  host: process.env.HOST,
  username: process.env.username,
  password: process.env.PASSWORD,
  database: "waynehills",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
};

module.exports = { development };
