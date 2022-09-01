// 로그인 및 관리자 등급 확인 미들웨어
const adminRequired = async (req, res, next) => {
  try {
    // 로그인했다면 req.user에 user 정보가 담김
    const user = req.user;

    // 로그인을 하지 않은 경우
    if (!user) {
      throw new Error("로그인이 필요한 페이지입니다.");
    }

    // 관리자가 아닌 경우
    if (user.tier !== 0) {
      throw new Error("관리자만 사용할 수 있는 서비스입니다.");
    }

    // 게시글 수정/ 삭제 시 passowrd를 사용하기 위해 req.pass에 할당
    req.pass = user.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminRequired;
