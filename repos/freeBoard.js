// const models = require("../database/models");
// const { v4: uuidv4 } = require("uuid");

// // 게시판 존재하는지 확인
// const checkDeletedPost = async (id) => {
//   const existingPost = await models.FreeBoard.findOne({
//     attributes: ["id"],
//     where: {
//       id,
//     },
//   });
//   return existingPost;
// };

// // 게시판 생성
// const createPost = async (UserId, CategoryId, title, content) => {
//   await models.FreeBoard.create({
//     id: uuidv4(),
//     UserId,
//     CategoryId,
//     title,
//     content,
//   });
// };

// // 게시판 수정
// const updatePost = async (id, CategoryId, title, content) => {
//   const updatedPost = await models.FreeBoard.update(
//     {
//       CategoryId,
//       title,
//       content,
//     },
//     {
//       where: { id },
//     }
//   );
//   return updatedPost;
// };

// // 게시판 삭제
// const destroyPost = async (id) => {
//   const deletedPost = await models.FreeBoard.destroy({
//     where: { id },
//   });
//   return deletedPost;
// };

// // 게시판 전체 조회
// const findPosts = async () => {
//   const posts = await models.FreeBoard.findAll({
//     include: [
//       {
//         model: models.User,
//         attributes: ["name"],
//         required: true,
//       },
//     ],
//     attributes: ["id", "title"],
//   });
//   return posts;
// };

// // 게시판 조회
// const findPost = async (id) => {
//   const PostDetail = await models.FreeBoard.findOne({
//     include: [
//       {
//         model: models.User,
//         attributes: ["name"],
//         required: true,
//       },
//     ],
//     attributes: ["title", "content"],
//     where: { id },
//   });
//   return PostDetail;
// // };

// module.exports = {
//   createPost,
//   updatePost,
//   destroyPost,
//   findPost,
//   findPosts,
//   checkDeletedPost,
// };
