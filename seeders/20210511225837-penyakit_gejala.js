"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("penyakit_gejala", [
      // // P1 Otitis
      // {
      //   penyakitId: "P1",
      //   gejalaId: "G1",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P1",
      //   gejalaId: "G21",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P1",
      //   gejalaId: "G22",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P1",
      //   gejalaId: "G3",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P1",
      //   gejalaId: "G7",
      //   cfp: 0.4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P2 FUS
      // {
      //   penyakitId: "P2",
      //   gejalaId: "G8",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P2",
      //   gejalaId: "G2",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P2",
      //   gejalaId: "G5",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P2",
      //   gejalaId: "G4",
      //   cfp: 0.2,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P3 Gastritis
      // {
      //   penyakitId: "P3",
      //   gejalaId: "G4",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P3",
      //   gejalaId: "G2",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P3",
      //   gejalaId: "G5",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P4 Dermatofitosis
      // {
      //   penyakitId: "P4",
      //   gejalaId: "G23",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P4",
      //   gejalaId: "G9",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P4",
      //   gejalaId: "G21",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P5 Abses
      // {
      //   penyakitId: "P5",
      //   gejalaId: "G12",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P5",
      //   gejalaId: "G2",
      //   cfp: 0.4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P5",
      //   gejalaId: "G1",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P6 Stomatitis
      // {
      //   penyakitId: "P6",
      //   gejalaId: "G13",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P6",
      //   gejalaId: "G2",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P6",
      //   gejalaId: "G5",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P6",
      //   gejalaId: "G7",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P7 Stomatitis
      // {
      //   penyakitId: "P7",
      //   gejalaId: "G15",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P7",
      //   gejalaId: "G16",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P7",
      //   gejalaId: "G17",
      //   cfp: 0.4,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P7",
      //   gejalaId: "G14",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P8 Scabiosis
      // {
      //   penyakitId: "P8",
      //   gejalaId: "G23",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P8",
      //   gejalaId: "G24",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P8",
      //   gejalaId: "G21",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P9 Gastroenteritis
      // {
      //   penyakitId: "P9",
      //   gejalaId: "G11",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P9",
      //   gejalaId: "G4",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P9",
      //   gejalaId: "G2",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P10 Helminthiasis
      // {
      //   penyakitId: "P10",
      //   gejalaId: "G19",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P10",
      //   gejalaId: "G20",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P10",
      //   gejalaId: "G11",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // // P11 Gingivitis
      // {
      //   penyakitId: "P11",
      //   gejalaId: "G18",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P11",
      //   gejalaId: "G7",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P11",
      //   gejalaId: "G10",
      //   cfp: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      //  // P12 Calicivirus
      //  {
      //   penyakitId: "P12",
      //   gejalaId: "G2",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P12",
      //   gejalaId: "G5",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P12",
      //   gejalaId: "G6",
      //   cfp: 0.8,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   penyakitId: "P12",
      //   gejalaId: "G7",
      //   cfp: 0.6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // P1 Otitis
      {
        penyakitId: "P1",
        gejalaId: "G1",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G2",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G4",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P1",
        gejalaId: "G3",
        cfp: 1,
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

      // P2 FUS
      {
        penyakitId: "P2",
        gejalaId: "G8",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P2",
        gejalaId: "G6",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P3 Gastritis
      {
        penyakitId: "P3",
        gejalaId: "G7",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P3",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P4 Dermatofitosis
      {
        penyakitId: "P4",
        gejalaId: "G9",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G10",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G11",
        cfp: 0.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P4",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P5 Abses
      {
        penyakitId: "P5",
        gejalaId: "G12",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P5",
        gejalaId: "G13",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P5",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P6 Stomatitis
      {
        penyakitId: "P6",
        gejalaId: "G14",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P6",
        gejalaId: "G6",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P6",
        gejalaId: "G15",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P6",
        gejalaId: "G5",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P7 Konjungtivis
      {
        penyakitId: "P7",
        gejalaId: "G16",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P7",
        gejalaId: "G18",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P7",
        gejalaId: "G17",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P8 Scabiosis
      {
        penyakitId: "P8",
        gejalaId: "G21",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P8",
        gejalaId: "G22",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P8",
        gejalaId: "G5",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P8",
        gejalaId: "G15",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P9 Gastroenteritis
      {
        penyakitId: "P9",
        gejalaId: "G19",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P9",
        gejalaId: "G7",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P9",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P10 Helminthiasis
      {
        penyakitId: "P10",
        gejalaId: "G24",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P10",
        gejalaId: "G23",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P10",
        gejalaId: "G15",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P11 Gingivitis
      {
        penyakitId: "P11",
        gejalaId: "G20",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P11",
        gejalaId: "G5",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P11",
        gejalaId: "G11",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P12 Ear mites
      {
        penyakitId: "P12",
        gejalaId: "G28",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P12",
        gejalaId: "G29",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P12",
        gejalaId: "G30",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // P12 Feline rhinotracheitis
      {
        penyakitId: "P13",
        gejalaId: "G31",
        cfp: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P13",
        gejalaId: "G32",
        cfp: 0.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P13",
        gejalaId: "G27",
        cfp: 0.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P13",
        gejalaId: "G18",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        penyakitId: "P13",
        gejalaId: "G6",
        cfp: 0.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("penyakit_gejala", null, {});
  },
};
