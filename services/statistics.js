const statisticsRepo = require("../repos/statistics");
const User = require("../database/models/user");
const timeUnitDao = require("../dao/timeUnitDao");

const moment = require("moment");
// 유저 테이블 성별 서비스 로직
const getUsersByGender = async (req, res, next) => {
  try {
    const users = await statisticsRepo.genderStatistics();
    users.forEach((user) => {
      user.sex = user.sex ? "male" : "female";
    });

    if (users.length === 0) {
      throw new Error("조회할 유저가 없습니다.");
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
// 유저 테이블 나이별 서비스 로직
const getUsersByAge = async (req, res, next) => {
  try {
    const users = await statisticsRepo.ageStatistics();
    users.forEach((user) => {
      user.sex = user.sex ? "male" : "female";
    });
    if (users.length === 0) {
      throw new Error("조회할 유저가 없습니다.");
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const genderPerPeriod = async (req, res, next) => {
  try {
    const { unit } = req.params;
    const now = moment().format();
    const start = timeUnitDao(unit);

    const userTimeSex = await statisticsRepo.genderPerPeriod(start, now);
    res.status(200).json(userTimeSex);
  } catch (err) {
    next(err);
  }
};

const agePerPeriod = async (req, res, next) => {
  try {
    const { unit } = req.params;
    const now = moment().format();
    const start = timeUnitDao(unit);

    const userTimeAge = await statisticsRepo.agePerPeriod(start, now);
    res.status(200).json(userTimeAge);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsersByGender,
  getUsersByAge,
  genderPerPeriod,
  agePerPeriod,
};
