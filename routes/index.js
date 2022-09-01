const express = require("express");
const router = express();

const userRouter = require("./userRouter");
router.use("/users", userRouter);

module.exports = router;
