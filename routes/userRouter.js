const express = require("express");
const router = express.Router();
const { userJoinValidator } = require("../validator/userValidator");
const { usersController } = require("../controllers");

// user create에 대한 api
router.post("/join", userJoinValidator(), usersController.addUser);

module.exports = router;
