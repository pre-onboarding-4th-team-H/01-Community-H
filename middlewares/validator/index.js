const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const resultErrors = { errors: [] };
  errors.array().forEach((error) => {
    resultErrors.errors.push({
      field: error.param,
      message: error.msg,
    });
  });
  return res.status(400).json(resultErrors);
};
