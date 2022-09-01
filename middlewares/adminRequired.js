const models = require("../database/models");

// 임시 미들웨어

// 관리자 등급 확인
const adminRequired = async (req, res, next) => {
  try {
    // 로그인 과정을 거쳤다고 가정
    const { UserId } = req.body;

    // 회원 등급 조회
    const user = await models.User.findOne({ where: { id: UserId } });

    // 관리자가 아닌 경우
    if (user.tier !== 0) {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(403).json({
      result: "forbidden-approach",
      reason: "관리자만 사용할 수 있는 서비스입니다.",
    });
    return;
  }
};

module.exports = adminRequired;
