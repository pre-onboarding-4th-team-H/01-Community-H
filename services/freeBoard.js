const { boardRepo } = require("../repos");
const model = require("../database/models/freeBoard");
const bcrypt = require("bcrypt");

const addPost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { categoryId, title, content } = req.body;
    const post = await boardRepo.createFreeBoardPost(
      categoryId,
      title,
      content,
      userId,
      model
    );
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

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
    const { id } = req.params;
    const { title, categoryId, content, password } = req.body;

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
    const updatedPost = await boardRepo.updateFreeBoardPost(
      id,
      categoryId,
      title,
      content,
      model
    );
    if (updatedPost[0] === 0) {
      throw new Error("내용이 변경되지 않았습니다.");
    }

    // 프론트가 있다는 가정 하에 수정된 post 객체를 보냄
    const post = await boardRepo.findPost(id, model);
    return res.status(200).json(post);
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

module.exports = {
  getPosts,
  getPost,
  setPost,
  deletePost,
  addPost,
};
