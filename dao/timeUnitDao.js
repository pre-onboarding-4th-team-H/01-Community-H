const moment = require("moment");

module.exports = (unit) => {
  if (unit === "hour") {
    return moment().format("YYYY-MM-DDTHH:00:00");
  } else if (unit === "day") {
    return moment().format("YYYY-MM-DDT00:00:00");
  }
};
