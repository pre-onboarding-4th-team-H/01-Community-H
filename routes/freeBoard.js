const express = require("express");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const { errorHandler } = require("../middlewares/errorHandler");
const {
  addPost,
  getPost,
  getPosts,
  deletePost,
  setPost,
} = require("../services/freeBoard");
const router = express.Router();

router.get("/posts", getPosts);
router.get("/post/:id", getPost);
router.patch("/post", boardValidator(), setPost);
router.delete("/post/:id", deletePost);
router.post("/post", boardValidator(), addPost);

module.exports = router;
