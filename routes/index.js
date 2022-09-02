const { Router } = require("express");
const router = Router();
const notice = require("./board");

router.use("/notice", notice);

module.exports = router;
