const Sequelize = require("sequelize");

module.exports = class OperateBoard extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
        content: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "OperateBoard",
        tableName: "operateBoards",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.OperateBoard.belongsTo(db.User);
  }
};
