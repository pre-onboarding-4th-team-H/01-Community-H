const noticeRepos = require("../repos/notice");

const notice = async (req, res) => {
  try {
    const { title, content, UserId } = req.body;

    // 빈 값을 받은 경우
    if (!(title && content && UserId)) {
      throw new Error("값을 입력해주세요.");
    }

    // 게시글 생성
    const post = await noticeRepos.createPost(title, content, UserId);

    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { notice };
