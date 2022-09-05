const { sequelize } = require("../database/models");
const models = require("../database/models");

const genderStatistics = async (model) => {
  const posts = await model.findAll({
    include: [
      {
        model: models.User,
        attributes: ["sex"],
        required: true,
      },
    ],
    attributes: ["sex", [sequelize.fn("count", sequelize.col("sex"))]],
    group: ["sex"],
  });
  return posts;
};

module.exports = { genderStatistics };
