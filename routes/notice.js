const { Router } = require("express");
const { addPost, getPosts } = require("../services/notice");
const router = Router();
const adminRequired = require("../middlewares/adminRequired");

// 관리자 CRUD / 유저 R

router.post("/notice", adminRequired, addPost);
router.get("/notice", getPosts);

module.exports = router;
