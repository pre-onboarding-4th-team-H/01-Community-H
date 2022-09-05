const express = require("express");
const router = express();

const userRouter = require("./user");
const freeRouter = require("./freeBoard");
const noticeRouter = require("./noticeBoard");
const operateBoardRouter = require("./operateBoard");
router.use("/free", freeRouter);
router.use("/notice", noticeRouter);
router.use("/operate", operateBoardRouter);
router.use("/user", userRouter);

module.exports = router;
