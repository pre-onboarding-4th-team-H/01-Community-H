const userJoinDao = require("../dao/userJoinDao");
const User = require("../database/models/user");
const commonErrorDto = require("../dto/commonErrorDto");
const { usersService } = require("../services/index");

// create user를 위한 입력 데이터에 대한 검증이 끝나 service 호출
const addUser = async (req, res) => {
  try {
    const user = await usersService.addUser(req.body);
    res.status(201).end();
  } catch (err) {
    console.error(err);
    res.status(400).json(commonErrorDto(err));
  }
};

module.exports = {
  addUser,
};
