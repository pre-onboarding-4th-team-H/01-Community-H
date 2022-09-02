const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

// 게시글 생성
const createPost = async (title, content, user) => {
  const post = await models.OperateBoard.create({
    id: uuidv4(),
    title,
    content,
    UserId: user.id,
  });
  return post;
};

// 전체 게시글 조회
const findPosts = async () => {
  const posts = await models.OperateBoard.findAll({});
  return posts;
};

// 게시글 조회
const findPost = async (id) => {
  const post = await models.OperateBoard.findOne({ where: { id } });
  return post;
};

// 게시글 수정
const updatePost = async (id, title, content) => {
  const result = await models.OperateBoard.update(
    { title, content },
    { where: { id } }
  );
  return result;
};

// 게시글 삭제
const destroyPost = async (id) => {
  const result = await models.OperateBoard.destroy({ where: { id } });
  return result;
};

module.exports = { createPost, findPosts, findPost, updatePost, destroyPost };
