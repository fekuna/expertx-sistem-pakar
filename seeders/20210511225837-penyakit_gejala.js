"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("penyakit_gejala", [
      // P1 Kulit normal
      {
        penyakitId: "P1",
        gejalaId: "G1",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G2",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G3",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G4",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G5",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G6",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G11",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P2 Kulit berminyak
      {
        penyakitId: "P2",
        gejalaId: "G7",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P2",
        gejalaId: "G8",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P2",
        gejalaId: "G9",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P2",
        gejalaId: "G16",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P3 Kulit kering
      {
        penyakitId: "P3",
        gejalaId: "G1",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P3",
        gejalaId: "G5",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P3",
        gejalaId: "G10",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P3",
        gejalaId: "G11",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P3",
        gejalaId: "G12",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P4 Kulit kombinasi
      {
        penyakitId: "P4",
        gejalaId: "G7",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G14",
        cfp: 0.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G15",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G16",
        cfp: 0.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G17",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     

      // P5 Rhinitis Kronis
      {
        penyakitId: "P5",
        gejalaId: "G12",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P5",
        gejalaId: "G18",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P5",
        gejalaId: "G19",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P5",
        gejalaId: "G20",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("penyakit_gejala", null, {});
  },
};
