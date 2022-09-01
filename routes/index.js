const express = require("express");
const router = express();

const operateBoardRouter = require("./operateBoard");

router.use("/operate", operateBoardRouter);

module.exports = router;
