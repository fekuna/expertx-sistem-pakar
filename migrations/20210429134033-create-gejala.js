"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("gejala", {
      gejalaId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(12),
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING(150),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      freezeTableName: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("gejala");
  },
};
