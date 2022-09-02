const { operateRepos } = require("../repos");
const { v4: uuidv4 } = require("uuid");

// 운영게시판 생성
const addOperateBoard = async (req, res, next) => {
  try {
    const { id, title, content, UserId } = req.body;
    const operateBoardInfo = {
      id: uuidv4(),
      title,
      content,
			UserId,
    };
    const post = await operateRepos.createPost(operateBoardInfo);
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
    const operateBoardInfo = {
      operateBoardId,
      title,
      content,
    };
    const updated = await operateRepos.updatePost(operateBoardInfo);
    if (updated) {
      const updatedJopOpening = await operateRepos.updatePost(operateBoardInfo);
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
    const deleted = await operateRepos.destroyPost({ where: { id: operateBoardId } });
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
