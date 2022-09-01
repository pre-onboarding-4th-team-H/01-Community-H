const noticeRepos = require("../repos/notice");

// 게시글 생성
const addPost = async (req, res) => {
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

// 게시글 전체 조회
const getPosts = async (req, res) => {
  try {
    const posts = await noticeRepos.findPosts();
    if (posts.length === 0) {
      throw new Error("조회할 게시글이 없습니다.");
    }
    res.status(201).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 게시글 조회
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await noticeRepos.findPost(id);
    if (!post) {
      throw new Error("조회할 게시글이 없습니다.");
    }
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addPost, getPosts, getPost };
