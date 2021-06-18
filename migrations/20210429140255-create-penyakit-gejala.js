"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("penyakit_gejala", {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER,
      // },
      penyakitId: {
        type: Sequelize.STRING,
        references: {
          model: "penyakit",
          key: "penyakitId",
          // onDelete: "CASCADE",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        primaryKey: true,
      },
      gejalaId: {
        type: Sequelize.STRING,
        references: {
          model: "gejala",
          key: "gejalaId",
          // onDelete: "CASCADE",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        primaryKey: true,
      },
      cfp: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("penyakit_gejala");
  },
};
