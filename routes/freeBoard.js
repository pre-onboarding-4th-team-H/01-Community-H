const express = require("express");
const router = express.Router();
const { freeBoardService } = require("../services");
const { boardValidator } = require("../middlewares/validator/boardValidator");

router.get("/", freeBoardService.getPosts);
router.get("/:id", freeBoardService.getPost);
router.patch("/", boardValidator(), freeBoardService.setPost);
router.delete("/:id", freeBoardService.deletePost);
router.post("/", boardValidator(), freeBoardService.addPost);

module.exports = router;
