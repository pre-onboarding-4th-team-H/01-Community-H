const { Router } = require("express");
const { notice } = require("../services/notice");
const router = Router();
const adminRequired = require("../middlewares/adminRequired");
// 관리자 CRUD / 유저 R

// 게시글 작성
router.post("/notice", adminRequired, notice);

module.exports = router;
