const express = require("express");
const router = express.Router();
const { userJoinValidator } = require("../validator/userValidator");
const { usersService } = require("../services/index");

// user create에 대한 api
router.post("/join", userJoinValidator(), usersService.addUser);

module.exports = router;
