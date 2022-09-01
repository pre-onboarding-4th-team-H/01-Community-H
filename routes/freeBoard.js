const express = require("express");
const {
  getPostAll,
  getPostDetail,
  updatePost,
  deletePost,
} = require("../services/freeBoard");
const router = express.Router();

router.get("/posts", getPostAll);
router.get("/post/:id", getPostDetail);
router.put("/post", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
