const errorHandler = (error, req, res, next) => {
  // 터미널에 노란색으로 출력됨.
  console.log("\x1b[33m%s\x1b[0m", error.stack);
  res.status(400).json({ result: "error", reason: error.message });
};

module.exports = { errorHandler };
