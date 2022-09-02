const { Router } = require("express");
const { noticeService } = require("../services");
const adminRequired = require("../middlewares/adminRequired");

const router = Router();

// 관리자 CRUD / 유저 R
router.post("/", adminRequired, noticeService.addPost);
router.get("/:id", noticeService.getPost);
router.get("/", noticeService.getPosts);
router.patch("/:id", adminRequired, noticeService.setPost);
router.delete("/:id", adminRequired, noticeService.deletePost);

module.exports = router;
