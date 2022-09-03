const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

// 게시글 생성
const createPost = async (title, content, userId) => {
  const post = await models.NoticeBoard.create({
    id: uuidv4(),
    title,
    content,
    UserId: userId,
  });
  return post;
};

// 전체 게시글 조회
const findPosts = async () => {
  const posts = await models.FreeBoard.findAll({
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
const findPost = async (id) => {
  const post = await models.FreeBoard.findOne({
    include: [
      {
        model: models.User,
        attributes: ["name"],
        required: true,
      },
    ],
    attributes: ["title", "content"],
    where: { id },
  });
  return post;
};

// 게시글 확인
const checkPost = async (id) => {
  const existingPost = await models.FreeBoard.findOne({
    attributes: ["id"],
    where: {
      id,
    },
  });
  return existingPost;
};

// 게시글 수정
const updatePost = async (id, title, content) => {
  const result = await models.NoticeBoard.update(
    { title, content },
    { where: { id } }
  );
  return result;
};

// 게시글 삭제
const destroyPost = async (id) => {
  const result = await models.NoticeBoard.destroy({ where: { id } });
  return result;
};

module.exports = {
  createPost,
  findPosts,
  findPost,
  checkPost,
  updatePost,
  destroyPost,
};
