const { operateRepos } = require("../repos");

// 운영게시판 생성
const addOperateBoard = async (req, res, next) => {
  try {
    const userId = req.user;
    const { title, content } = req.body;
    // const { title, content, UserId } = req.body;
    // const operateBoardInfo = {
    //   title,
    //   content,
    //   userId,
    // };
    const post = await operateRepos.createPost(title, content, userId);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// 운영게시판 전체 조회
const getOperateBoards = async (req, res, next) => {
  try {
    const posts = await operateRepos.findPosts();
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// 운영게시판 조회
const getOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const post = await operateRepos.findPost(operateBoardId);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 수정
const setOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const { title, content } = req.body;
    // const operateBoardInfo = {
    //   operateBoardId,
    //   title,
    //   content,
    // };
    // const updated = await operateRepos.updatePost(operateBoardInfo);
    const updated = await operateRepos.updatePost(
      operateBoardId,
      title,
      content
    );
    if (updated) {
      // const updatedJopOpening = await operateRepos.updatePost(operateBoardInfo);
      // updatePost가 객체를 풀어서 받기 때문에 이렇게 수정했습니다.
      // 그런데 이 조건문이 무엇을 뜻하는지 잘 모르겠습니다.
      const updatedJopOpening = await operateRepos.updatePost(
        operateBoardId,
        title,
        content
      );
      return res.status(200).json(updatedJopOpening);
    }
    throw new Error("Operate board not found.");
  } catch (err) {
    next(err);
  }
};

// 게시글 삭제
const deleteOperateBoard = async (req, res, next) => {
  try {
    const operateBoardId = req.params.id;
    const deleted = await operateRepos.destroyPost(operateBoardId);
    if (deleted) {
      return res.status(200).json({ Message: "Operate board deleted." });
    }
    throw new Error("Operate board not found.");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addOperateBoard,
  getOperateBoards,
  getOperateBoard,
  setOperateBoard,
  deleteOperateBoard,
};
