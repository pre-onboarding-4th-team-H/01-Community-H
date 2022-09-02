const models = require("../database/models");
const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
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

const createPost = async (UserId, CategoryId, title, content) => {
  await models.FreeBoard.create({
    id: uuidv4(),
    UserId,
    CategoryId,
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

const destroyPost = async (id) => {
  console.log("delete");
  const deletedPost = await models.FreeBoard.destroy({
    where: { id },
  });
  return deletedPost;
};

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

const findPost = async (id) => {
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
  destroyPost,
  findPost,
  findPosts,
  checkDeletedPost,
};
