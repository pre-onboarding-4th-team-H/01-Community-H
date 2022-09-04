const { boardRepo } = require("../repos");
const model = require("../database/models/freeBoard");

const getPosts = async (req, res, next) => {
  try {
    const posts = await boardRepo.findPosts(model);
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const PostDetail = await boardRepo.findPost(id, model);
    return res.status(200).json(PostDetail);
  } catch (err) {
    next(err);
  }
};

const setPost = async (req, res, next) => {
  try {
    const { id, title, content } = req.body;
    // const { id, categoryId, title, content } = req.body;
    // const existingPost = await freeBoardRepos.checkDeletedPost(id);
    const existingPost = await boardRepo.checkPost(id, model);
    if (!existingPost) {
      throw new Error("이미 삭제된 공고입니다.");
    }
    const updatedPost = await boardRepo.updatePost(id, title, content, model);
    // const updatedPost = await freeBoardRepos.updatePost(
    //   id,
    //   categoryId,
    //   title,
    //   content
    // );
    if (updatedPost[0] === 0) {
      throw new Error("내용이 변경되지 않았습니다.");
    }
    // if (updatedPost[0] === 1) {
    //   throw new Error("내용이 변경되지 않았습니다.");
    // }
    return res.status(200).json({ message: "Posting is updated" });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await boardRepo.destroyPost(id, model);
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
    const userId = req.userId;
    const { title, content } = req.body;
    // const { userId, categoryId, title, content } = req.body;
    await boardRepo.createPost(title, content, userId, model);
    // await freeBoardRepos.createPost(userId, categoryId, title, content);
    return res.status(200).json({ message: "jobPosting is created" });
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
