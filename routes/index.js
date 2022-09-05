const express = require("express");
const router = express();

const userRouter = require("./user");
const freeRouter = require("./freeBoard");
const noticeRouter = require("./noticeBoard");
const operateBoardRouter = require("./operateBoard");
const statisticsRouter = require("./statistics");
router.use("/free", freeRouter);
router.use("/notice", noticeRouter);
router.use("/operate", operateBoardRouter);
router.use("/user", userRouter);
router.use("/statistics", statisticsRouter);

module.exports = router;
