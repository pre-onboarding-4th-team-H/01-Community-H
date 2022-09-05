const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

// 게시글 생성
const createPost = async (title, content, userId, model) => {
  const post = await model.create({
    id: uuidv4(),
    title,
    content,
    UserId: userId,
  });
  return post;
};

// 자유게시판 게시글 생성
const createFreeBoardPost = async (
  title,
  categoryId,
  content,
  userId,
  model
) => {
  const post = await model.create({
    id: uuidv4(),
    categoryId,
    title,
    content,
    UserId: userId,
  });
  return post;
};

// 전체 게시글 조회
const findPosts = async (model) => {
  const posts = await model.findAll({
    include: [
      {
        model: models.User,
        attributes: ["name"],
        required: true,
      },
    ],
    attributes: ["id", "title"],
  });
  return posts;
};

// 게시글 조회
const findPost = async (id, model) => {
  const post = await model.findOne({
    include: [
      {
        model: models.User,
        attributes: ["name"],
        required: true,
      },
    ],
    attributes: ["id", "title", "content", "UserId"],
    where: { id },
  });
  return post;
};

// 게시글 수정
const updatePost = async (id, title, content, model) => {
  const result = await model.update({ title, content }, { where: { id } });
  return result;
};

// 자유게시판 수정
const updateFreeBoardPost = async (id, categoryId, title, content, model) => {
  const result = await model.update(
    { title, content, categoryId },
    { where: { id } }
  );
  return result;
};

// 게시글 삭제
const destroyPost = async (id, model) => {
  const result = await model.destroy({ where: { id } });
  return result;
};

module.exports = {
  createPost,
  findPosts,
  findPost,
  updatePost,
  destroyPost,
  updateFreeBoardPost,
  createFreeBoardPost,
};
