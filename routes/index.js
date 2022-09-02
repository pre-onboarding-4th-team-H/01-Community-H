const express = require("express");
const router = express.Router();
const freeBoard = require("./freeBoard");
const userRouter = require("./user");
const noticeRouter = require("./board");
router.use(freeBoard);
router.use("/notice", noticeRouter);
router.use("/user", userRouter);

module.exports = router;
