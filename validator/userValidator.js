const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");
/**
 * <user create시 사용자 입력에 대한 검증 로직>
 *
 * name : required, maxLength : 50
 * email : required, email form, maxLength : 100,
 * password : required, length : 8 ~ 16, (숫자, 대소문자, 특수문자 포함)
 * age : required, Int
 * sex : required, boolean
 * phonenumber : required, phone form, maxLength : 25
 */
function userJoinValidator() {
  return [
    body("name")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isLength({ max: 50 })
      .withMessage(errorCodes.wrongFormat),
    body("email")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isEmail()
      .bail()
      .withMessage(errorCodes.wrongEmailFormat)
      .isLength({ max: 100 })
      .withMessage(errorCodes.wrongFormat),
    body("password")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isLength({ min: 8, max: 16 })
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[A-za-z]/)
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[~!@#$%^&*()_+|<>?:{}]/)
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[0-9]/)
      .withMessage(errorCodes.wrongPwdFormat),
    body("age")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isInt()
      .withMessage(errorCodes.onlyNumber),
    body("sex")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isBoolean()
      .withMessage(errorCodes.wrongFormat),
    body("phonenumber")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isMobilePhone()
      .bail()
      .withMessage(errorCodes.wrongFormat)
      .isLength({ max: 25 })
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { userJoinValidator };
