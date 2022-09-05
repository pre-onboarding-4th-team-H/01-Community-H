const { sequelize, User } = require("../database/models");
const models = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");
const now = moment().format();
const start = moment().format("YYYY-MM-DDTHH:00:00");

// 유저 테이블에서 성별로 통계 조회
const genderStatistics = async () => {
  const users = await models.User.findAndCountAll({
    attributes: ["sex", [sequelize.fn("count", sequelize.col("sex")), "user"]],
    group: ["sex"],
  });
  return users;
};

// 유저 테이블에서 나이별 통계 조회
const ageStatistics = async () => {
  const users = await models.User.findAndCountAll({
    attributes: ["age", [sequelize.fn("count", sequelize.col("age")), "user"]],
    group: ["age"],
  });
  return users;
};

const genderPerPeriod = async (start, now) => {
  const userTimeSex = await User.findAndCountAll({
    attributes: ["sex", [sequelize.fn("count", sequelize.col("sex")), "user"]],
    group: ["sex"],
    where: {
      lastLog: {
        [Op.and]: {
          [Op.gte]: start,
          [Op.lte]: now,
        },
      },
    },
  });
  console.log(userTimeSex, "sdfsdf");
  return userTimeSex;
};

const agePerPeriod = async (start, end) => {
  const userTimeAge = await User.findAndCountAll({
    attributes: ["age", [sequelize.fn("count", sequelize.col("age")), "user"]],
    group: ["age"],
    where: {
      lastLog: {
        [Op.and]: {
          [Op.gte]: start,
          [Op.lte]: now,
        },
      },
    },
  });
  return userTimeAge;
};

module.exports = {
  genderStatistics,
  ageStatistics,
  genderPerPeriod,
  agePerPeriod,
};
