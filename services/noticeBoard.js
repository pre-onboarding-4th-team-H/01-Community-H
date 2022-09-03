const { boardRepo } = require("../repos");
const model = require("../database/models/noticeBoard");

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

    res.status(201).json(posts);
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

    res.status(201).json(post);
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

    // 현재 회원 비밀번호와 일치하는지 확인
    const userPassword = req.user.password;

    // 유저 비밀번호가 해쉬화되지 않았기 때문에 임시로 조건문 사용
    // const isPasswordCorrect = await bcryt.compare(password, userPassword);
    if (userPassword !== password) {
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

module.exports = { addPost, getPosts, getPost, setPost, deletePost };
