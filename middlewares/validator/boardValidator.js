const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../../codes/errorCodes");

function boardValidator() {
  return [
    body("UserId").trim().notEmpty().bail().withMessage(errorCodes.required),
    body("title")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 100 })
      .bail()
      .withMessage(errorCodes.wrongFormat),
    body("content")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 1000 })
      .bail()
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { boardValidator };
