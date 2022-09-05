const { boardRepo } = require("../repos");
const model = require("../database/models/freeBoard");
const bcrypt = require("bcrypt");

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
    console.log("cponter");
    const { id } = req.params;
    const { title, content, password } = req.body;
    // const { id, categoryId, title, content } = req.body;
    // const existingPost = await freeBoardRepos.checkDeletedPost(id);
    const existingPost = await boardRepo.findPost(id, model);

    if (!existingPost) {
      throw new Error("이미 삭제된 공고입니다.");
    }
    console.log(req.user.id);
    console.log(existingPost.User);
    if (req.user.id !== existingPost.UserId) {
      throw new Error("글 작성자가 아닙니다.");
    }

    // 해당 공지 게시글의 글 작성자인지 확인하기 위해 비밀번호를 입력받는다.
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
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
    const { password } = req.body;
    const existingPost = await boardRepo.findPost(id, model);

    if (!existingPost) {
      throw new Error("이미 삭제된 공고입니다.");
    }

    if (req.user.id !== existingPost.UserId) {
      throw new Error("글 작성자가 아닙니다.");
    }

    // 해당 공지 게시글의 글 작성자인지 확인하기 위해 비밀번호를 입력받는다.
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    await boardRepo.destroyPost(id, model);

    return res.status(200).json({ message: "Posting is deleted" });
  } catch (err) {
    next(err);
  }
};

const addPost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    // const { userId, categoryId, title, content } = req.body;
    console.log(userId);
    const post = await boardRepo.createPost(title, content, userId, model);
    // await freeBoardRepos.createPost(userId, categoryId, title, content);
    return res.status(201).json(post);
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
