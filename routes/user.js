const express = require("express");
const router = express.Router();
const { userJoinValidator } = require("../middlewares/validator/userValidator");
const { userService } = require("../services/index");

// user create에 대한 api
router.post("/join", userJoinValidator(), userService.addUser);

module.exports = router;
