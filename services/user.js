const { userRepository } = require("../repos");
const userJoinDao = require("../dao/userJoinDao");
// service 로직은 사용자 데이터를 repository에서 실제 DB에 접근하기 전
// data를 변환 후 repository에 addUser를 요청한다.
const addUser = async (req, res, next) => {
  try {
    await userRepository.createUser(await userJoinDao(req.body));
    res.status(201).end();
  } catch (err) {
    next(err);
  }
};

module.exports = { addUser };
