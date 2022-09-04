const User = require("../database/models/user");
const errorCodes = require("../codes/errorCodes");
// controller -> service를 거쳐 사용자에 대한 검증과 DB 접근을 위한 데이터 정제를 마친 후
// DB에 user를 생성하기 위한 함수.
const createUser = async (data) => {
  try {
    return await User.create(data);
  } catch (err) {
    const e = new Error();
    // 이미 존재하는 이메일을 위한 예외처리
    if (err.parent.code == "ER_DUP_ENTRY") {
      e.message = errorCodes.existEmail;
      e.name = "email";
      throw e;
    }
  }
};

const findOneWithId = async (id) => {
  try {
    return await User.findOne({ where: { id } });
  } catch (err) {
    throw new Error("다시 시도해 주세요");
  }
};

module.exports = { createUser, findOneWithId };
