const bcrypt = require("bcryptjs");

("use strict");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "alfan",
        name: "Alfan Almunawar",
        email: "alfan@gmail.com",
        password: await hashPassword("asd123"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "bambang",
        name: "Bam bang",
        email: "example@example.com",
        password: await hashPassword("asd123"),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
