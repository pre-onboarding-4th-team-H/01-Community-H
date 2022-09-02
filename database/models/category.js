const Sequelize = require("sequelize");

module.exports = class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        underscored: false,
        timestamps: true,
        modelName: "Category",
        tableName: "categories",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Category.hasMany(db.FreeBoard);
  }
};
