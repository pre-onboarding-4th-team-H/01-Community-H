const { Router } = require("express");
const { noticeService } = require("../services");
const adminRequired = require("../middlewares/adminRequired");
const loginRequired = require("../middlewares/loginRequired");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

const router = Router();

// 관리자 CRUD / 유저 R
router.post(
  "/",
  loginRequired,
  adminRequired,
  boardValidator(),
  noticeService.addPost
);
router.get("/:id", noticeService.getPost);
router.get("/", noticeService.getPosts);
router.patch(
  "/:id",
  loginRequired,
  adminRequired,
  boardValidator(),
  passwordValidator(),
  noticeService.setPost
);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  passwordValidator(),
  noticeService.deletePost
);

module.exports = router;
