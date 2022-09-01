module.exports = (err) => {
  const error = {
    error: {
      message: err.message,
    },
  };
  if (err.name) {
    error.error.field = err.name;
  }

  return error;
};
