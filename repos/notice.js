const models = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createPost = async (title, content, UserId) => {
  const post = await models.NoticeBoard.create({
    title,
    content,
    UserId,
  });
  return post;
};

const findPosts = async () => {
  const posts = await models.NoticeBoard.findAll({});
  return posts;
};

const findPost = async (id) => {
  const post = await models.NoticeBoard.findOne({ where: { id } });
  return post;
};

module.exports = { createPost, findPosts, findPost };
