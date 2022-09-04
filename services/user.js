const { userRepository } = require("../repos");
const userJoinDao = require("../dao/userJoinDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

// 로그인
const addUserToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 유저 확인
    const user = await userRepository.findUser(email);
    if (!user) {
      throw new Error("해당 이메일은 가입 내역이 없습니다. ");
    }

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;

    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";

    // 토큰에 user.id 담음
    const token = jwt.sign({ userId: user.id }, secretKey);

    res.status(201).json(token);
  } catch (err) {
    next(err);
  }
};

module.exports = { addUser, addUserToken };
