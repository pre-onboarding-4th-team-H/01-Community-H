const bcrypt = require("bcrypt");

module.exports = async (body) => {
  return {
    name: body.name,
    email: body.email,
    password: await bcrypt.hash(body.password, 12),
    age: body.age,
    tier: 1,
    sex: body.sex,
    phoneNumber: body.phonenumber,
  };
};
