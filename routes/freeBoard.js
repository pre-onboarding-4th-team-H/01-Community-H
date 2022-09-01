const express = require("express");
const { getPostAll, getPostDetail } = require("../services/freeBoard");
const router = express.Router();

router.get("/posts", getPostAll);
router.get("/post/:id", getPostDetail);

module.exports = router;
