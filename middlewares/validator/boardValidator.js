const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");
/**
 * <board create, update, delete 입력 데이터(title, content)에 대한 검증 로직>
 *
 * title : required, maxLength : 100
 * content : required, maxLength : 1000
 */
function boardValidator() {
  return [
    body("title")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isLength({ max: 100 })
      .withMessage(errorCodes.wrongFormat),
    body("content")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isLength({ max: 1000 })
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { boardValidator };
