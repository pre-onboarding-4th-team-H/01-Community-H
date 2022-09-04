const freeBoardRepos = require("../repos/freeBoard");
const getPosts = async (req, res, next) => {
  try {
    const posts = await freeBoardRepos.findPosts();
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const PostDetail = await freeBoardRepos.findPost(id);
    return res.status(200).json(PostDetail);
  } catch (err) {
    next(err);
  }
};

const setPost = async (req, res, next) => {
  try {
    const { id, categoryId, title, content } = req.body;
    const existingPost = await freeBoardRepos.checkDeletedPost(id);
    if (!existingPost) {
      throw new Error("이미 삭제된 공고입니다.");
    }
    const updatedPost = await freeBoardRepos.updatePost(
      id,
      categoryId,
      title,
      content
    );
    if (updatedPost[0] === 1) {
      throw new Error("내용이 변경되지 않았습니다.");
    }
    return res.status(200).json({ message: "Posting is updated" });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await freeBoardRepos.destroyPost(id);
    if (!deletedPost) {
      throw new Error("이미 삭제된 공고입니다.");
    }
    return res.status(200).json({ message: "Posting is deleted" });
  } catch (err) {
    next(err);
  }
};

const addPost = async (req, res, next) => {
  try {
    const { userId, categoryId, title, content } = req.body;
    await freeBoardRepos.createPost(userId, categoryId, title, content);
    return res.status(200).json({ message: "Posting is created" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPosts,
  getPost,
  setPost,
  deletePost,
  addPost,
};
