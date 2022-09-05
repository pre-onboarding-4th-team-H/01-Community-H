const { boardRepo } = require("../repos");
const model = require("../database/models/noticeBoard");
const bcrypt = require("bcrypt");

// 게시글 생성
const addPost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;

    // 게시글 생성
    const post = await boardRepo.createPost(title, content, userId, model);

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 전체 조회
const getPosts = async (req, res, next) => {
  try {
    const posts = await boardRepo.findPosts(model);

    // 게시글이 없는 경우
    if (posts.length === 0) {
      throw new Error("조회할 게시글이 없습니다.");
    }

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// 게시글 조회
const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await boardRepo.findPost(id, model);

    // 게시글이 없는 경우
    if (!post) {
      throw new Error("조회할 게시글이 없습니다.");
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 수정
const setPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, password } = req.body;

    // 해당 게시글이 있는지 확인
    let post = await boardRepo.findPost(id, model);
    if (!post) {
      throw new Error("게시글이 존재하지 않습니다.");
    }

    // 해당 공지 게시글의 글 작성자인지 확인하기 위해 비밀번호를 입력받는다.
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await boardRepo.updatePost(id, title, content, model);

    // 수정되지 않은 경우
    if (result[0] === 0) {
      throw new Error("게시글이 수정되지 않았습니다.");
    }

    // 프론트가 있다는 가정 하에 수정된 post 객체를 보냄
    post = await boardRepo.findPost(id, model);

    res.status(201).json(post);
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

    // 해당 공지 게시글의 글 작성자인지 확인하기 위해 비밀번호를 입력받는다.
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await boardRepo.destroyPost(id, model);

    if (result[0] === 0) {
      throw new Error("게시글이 삭제되지 않았습니다.");
    }

    res.status(200).json({ message: `${id} 게시글이 삭제되었습니다.` });
  } catch (err) {
    next(err);
  }
};

module.exports = { addPost, getPosts, getPost, setPost, deletePost };
