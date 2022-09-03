const { Router } = require("express");
const { noticeService } = require("../services");
const adminRequired = require("../middlewares/adminRequired");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

const router = Router();

// 관리자 CRUD / 유저 R
router.post("/", boardValidator(), adminRequired, noticeService.addPost);
router.get("/:id", noticeService.getPost);
router.get("/", noticeService.getPosts);
router.patch(
  "/:id",
  boardValidator(),
  passwordValidator(),
  adminRequired,
  noticeService.setPost
);
router.delete(
  "/:id",
  boardValidator(),
  passwordValidator(),
  adminRequired,
  noticeService.deletePost
);

module.exports = router;
