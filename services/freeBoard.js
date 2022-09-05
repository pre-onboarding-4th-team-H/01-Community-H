const boardRepo = require("../repos/board");
const model = require("../database/models/freeBoard");

const addPost = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { categoryId, title, content } = req.body;
    const post = await boardRepo.createFreeBoardPost(
      userId,
      categoryId,
      title,
      content,
      model
    );
    return res.status(200).json(post);
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
    const id = req.params.id;
    const { categoryId, title, content } = req.body;
    let post = await boardRepo.findPost(id, model);
    if (!post) {
      throw new Error("이미 삭제된 공고입니다.");
    }

    // 현재 회원 비밀번호와 일치하는지 확인
    const userPassword = req.user.password;

    // 유저 비밀번호가 해쉬화되지 않았기 때문에 임시로 조건문 사용
    // const isPasswordCorrect = await bcryt.compare(password, userPassword);
    if (userPassword !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const updatedPost = await boardRepo.updateFreeBoardPostPost(
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
    post = await boardRepo.findPost(id, model);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 삭제
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // 해당 게시글이 있는지 확인
    const isPost = await boardRepo.findPost(id, model);
    if (!isPost) {
      throw new Error("게시글이 존재하지 않습니다.");
    }

    // 현재 회원 비밀번호와 일치하는지 확인
    const userPassword = req.user.password;

    // 유저 비밀번호가 해쉬화되지 않았기 때문에 임시로 조건문 사용
    // const isPasswordCorrect = await bcryt.compare(password, userPassword);
    if (userPassword !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await boardRepo.destroyPost(id, model);

    if (result[0] === 0) {
      throw new Error("게시글이 삭제되지 않았습니다.");
    }

    res.status(201).json({ message: `${id} 게시글이 삭제되었습니다.` });
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
