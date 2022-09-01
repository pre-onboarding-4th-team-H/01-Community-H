const express = require("express");
const router = express.Router();
const freeBoard = require("./freeBoard");

router.use(freeBoard);

module.exports = router;
