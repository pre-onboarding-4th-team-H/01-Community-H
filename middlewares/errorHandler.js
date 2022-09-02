// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  // 터미널에 노란색으로 출력됨.
  console.log("\x1b[33m%s\x1b[0m", error.stack);
  // 에러는 400 코드의 JSON 형태로 프론트에 전달됨
  const errorMessage = {
    error: {
      message: error.message,
    },
  };
  if (error.name) {
    errorMessage.error.field = error.name;
  }

  res.status(400).json(errorMessage);
}

module.exports = errorHandler;
