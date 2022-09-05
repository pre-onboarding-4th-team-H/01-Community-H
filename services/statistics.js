const { statisticsRepo } = require("../repos/statistics");
const freeBoard = require("../database/models/freeBoard");

const getPosts = async (req, res, next) => {
  try {
    const posts = await statisticsRepo.genderStatistics(freeBoard);

    // 게시글이 없는 경우
    if (posts.length === 0) {
      throw new Error("조회할 게시글이 없습니다.");
    }

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

module.exports = { getPosts };
