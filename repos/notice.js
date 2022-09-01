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

module.exports = { createPost, findPosts };