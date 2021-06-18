"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "history_diagnosis",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        penyakitId: {
          type: Sequelize.STRING,
          // references: {
          //   model: "penyakit",
          //   key: "id",
          // },
          // onDelete: "NO ACTION",
          // onUpdate: "CASCADE",
          allowNull: false,
        },
        penyakitName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "users",
            key: "id",
          },
          onDelete: "NO ACTION",
          onUpdate: "CASCADE",
          allowNull: false,
        },
        hasil: {
          type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable("history_diagnosis");
  },
};
