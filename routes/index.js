<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const freeBoard = require("./freeBoard");

router.use(freeBoard);
=======
const { Router } = require("express");
const router = Router();
const userRouter = require("./user");
const noticeRouter = require("./board");

router.use("/notice", noticeRouter);
router.use("/user", userRouter);
>>>>>>> develop

module.exports = router;
