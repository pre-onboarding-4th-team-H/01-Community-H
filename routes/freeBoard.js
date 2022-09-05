const express = require("express");
const router = express.Router();
const { freeBoardService } = require("../services");
const loginRequired = require("../middlewares/loginRequired");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

router.get("/", freeBoardService.getPosts);
router.get("/:id", freeBoardService.getPost);
router.patch(
  "/:id",
  loginRequired,
  boardValidator(),
  passwordValidator(),
  freeBoardService.setPost
);
router.delete("/:id", loginRequired, freeBoardService.deletePost);
router.post("/", loginRequired, boardValidator(), freeBoardService.addPost);

module.exports = router;
