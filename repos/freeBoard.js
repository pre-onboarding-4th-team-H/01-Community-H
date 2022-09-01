const models = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createPost = async (userId, categoryId, title, content) => {
  await models.FreeBoard.create({
    userId,
    categoryId,
    title,
    content,
  });
};

const updatePost = async (id, categoryId, title, content) => {
  const updatedPost = await models.FreeBoard.update(
    {
      categoryId,
      title,
      content,
    },
    {
      where: { id },
    }
  );
  return updatedPost;
};

const deletePost = async (id) => {
  const deletedPost = await models.FreeBoard.destroy({
    where: { id },
  });
  return deletedPost;
};

const getPostAll = async () => {
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

const getPostDetail = async (id) => {
  const PostDetail = await models.FreeBoard.findOne({
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
  return PostDetail;
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostAll,
  getPostDetail,
};
