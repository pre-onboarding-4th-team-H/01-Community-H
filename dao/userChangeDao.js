const bcrypt = require("bcrypt");
module.exports = async (id, data) => {
  return {
    userId: { id },
    data: {
      name: data.name,
      email: data.email,
      password: await bcrypt.hash(data.newPassword, 12),
      age: data.age,
      tier: 1,
      sex: data.sex,
      phoneNumber: data.phonenumber,
    },
  };
};
