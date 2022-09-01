const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: false,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
        },
        tier: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
        },
        sex: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        lastLog: {
          type: Sequelize.DATE,
        },
        phoneNumber: {
          type: Sequelize.STRING(25),
          allowNull: false,
          defaultValue: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.FreeBoard);
    db.User.hasMany(db.NoticeBoard);
    db.User.hasMany(db.OperateBoard);
  }
};
