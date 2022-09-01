const { Router } = require("express");
const {
  addPost,
  getPosts,
  getPost,
  setPost,
  deletePost,
} = require("../services/notice");
const adminRequired = require("../middlewares/adminRequired");

const router = Router();

// 관리자 CRUD / 유저 R
router.post("/notice", adminRequired, addPost);
router.get("/notice/:id", getPost);
router.get("/notice", getPosts);
router.patch("/notice/:id", adminRequired, setPost);
router.delete("/notice/:id", adminRequired, deletePost);

module.exports = router;
