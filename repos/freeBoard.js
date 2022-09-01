const models = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const checkDeletedPost = async (id) => {
  const existingPost = await models.FreeBoard.findOne({
    attributes: ["id"],
    where: {
      id,
    },
  });
  return existingPost;
};

const createPost = async (userId, categoryId, title, content) => {
  await models.FreeBoard.create({
    userId,
    categoryId,
    title,
    content,
  });
};

const updatePost = async (id, CategoryId, title, content) => {
  const updatedPost = await models.FreeBoard.update(
    {
      CategoryId,
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
  console.log("delete");
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
  checkDeletedPost,
};
