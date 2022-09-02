const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
module.exports = async (body) => {
  return {
    id: uuidv4(),
    name: body.name,
    email: body.email,
    password: await bcrypt.hash(body.password, 12),
    age: body.age,
    tier: 1,
    sex: body.sex,
    phoneNumber: body.phonenumber,
  };
};
