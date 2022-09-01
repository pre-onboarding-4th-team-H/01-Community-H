const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config")[env];
const Category = require("./category");
const FreeBoard = require("./freeBoard");
const NoticeBoard = require("./noticeBoard");
const User = require("./user");
const OperateBoard = require("./operateBoard");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.FreeBoard = FreeBoard;
db.NoticeBoard = NoticeBoard;
db.OperateBoard = OperateBoard;
db.Category = Category;

User.init(sequelize);
FreeBoard.init(sequelize);
NoticeBoard.init(sequelize);
OperateBoard.init(sequelize);
Category.init(sequelize);

User.associate(db);
NoticeBoard.associate(db);
FreeBoard.associate(db);
OperateBoard.associate(db);
Category.associate(db);

module.exports = db;
