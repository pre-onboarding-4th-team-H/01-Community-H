const Sequelize = require("sequelize");

module.exports = class FreeBoard extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
        },
        content: {
          type: Sequelize.STRING(1000),
          allowNull: false,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "FreeBoard",
        tableName: "freeBoards",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.FreeBoard.belongsTo(db.User);
    db.FreeBoard.belongsTo(db.Category);
  }
};
