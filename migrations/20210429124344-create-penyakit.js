"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "penyakit",
      {
        penyakitId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING(12),
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        desc: {
          type: Sequelize.TEXT,
        },
        solusi: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("penyakit");
  },
};
