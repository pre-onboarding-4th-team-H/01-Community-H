const jwt = require("jsonwebtoken");
const { userRepository } = require("../repos/index");
// 로그인 및 관리자 등급 확인 미들웨어
const loginRequired = async (req, res, next) => {
  try {
    // 로그인했다면 req.headers["authorization"]에 담긴 토큰을 가져옴
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token || token === "null") {
      throw new Error("로그인이 필요한 페이지입니다.");
    }

    // 해당 token 이 정상적인 token인지 확인
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const jwtDecoded = jwt.verify(token, secretKey);

    // 라우터에서 쓸 수 있도록 req.user에 user 저장
    req.user = await userRepository.findUserWithId(jwtDecoded.userId);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginRequired;
