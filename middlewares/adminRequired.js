// 로그인 및 관리자 등급 확인 미들웨어
const adminRequired = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("로그인이 필요한 페이지입니다.");
    }

    // tier 확인
    if (req.user.tier !== 0) {
      throw new Error("관리자만 접근 가능한 페이지입니다.");
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminRequired;
