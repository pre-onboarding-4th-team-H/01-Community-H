const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");
/**
 * <board update, delete 시 password 검증 로직>
 *
 * password:required
 */
function passwordValidator() {
  return [body("password").notEmpty().withMessage(errorCodes.required), index];
}

module.exports = { passwordValidator };
