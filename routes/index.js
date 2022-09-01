const { Router } = require("express");
const router = Router();
const notice = require("./notice");

router.use(notice);

module.exports = router;
