const Sequelize = require("sequelize");

module.exports = class FreeBoard extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
        },
        UserId: {
          type: Sequelize.INTEGER,
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
        modelName: "FreeBoard",
        tableName: "freeBoards",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.FreeBoard.belongsTo(db.User, { foreignKey: "UserId" });
    db.FreeBoard.belongsTo(db.Category);
  }
};
