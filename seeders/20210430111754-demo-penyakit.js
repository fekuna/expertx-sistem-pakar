"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("penyakit", [
      {
        id: "P1",
        name: "Kulit normal",
        solusi: "banyakin doa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P2",
        name: "Kulit berminyak",
        solusi: "Jangan mengorek kuping",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P3",
        name: "Kulit kering",
        solusi: "jangan banyak begadang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P4",
        name: "Kulit kombinasi",
        solusi: "Sinusoidal kali dah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P5",
        name: "Kulit sensitif",
        solusi: "Cari di google coba",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("penyakit", null, {});
  },
};
