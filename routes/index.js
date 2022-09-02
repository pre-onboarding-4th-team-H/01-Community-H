const { Router } = require("express");
const router = Router();
const userRouter = require("./user");
const noticeRouter = require("./board");

router.use("/notice", noticeRouter);
router.use("/user", userRouter);

module.exports = router;
