const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const {
  userJoinValidator,
  userSetvalidator,
} = require("../middlewares/validator/userValidator");
const { userService } = require("../services/index");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

// user create에 대한 api
router.post("/join", userJoinValidator(), userService.addUser);
router.patch("/", loginRequired, userSetvalidator(), userService.setUser);
router.post("/login", passwordValidator(), userService.addUserToken);
router.delete("/", loginRequired, passwordValidator(), userService.deleteUser);
module.exports = router;
