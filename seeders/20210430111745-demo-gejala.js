"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("gejala", [
      {
        id: "G1",
        name: "Tidak berminyak",
        desc: "Tidak berminyak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G2",
        name: "Segar dan halus",
        desc: "Segar dan halus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G3",
        name: "Bahan-bahan kosmetik mudah menempel di kulit",
        desc: "Bahan-bahan kosmetik mudah menempel di kulit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G4",
        name: "Terlihat sehat",
        desc: "Terlihat sehat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G5",
        name: "Tidak berjerawat",
        desc: "Tidak berjerawat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G6",
        name: "Mudah memilih kosmetik",
        desc: "Mudah memilih kosmetik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G7",
        name: "Pori-pori kulit besar terutama di area hidung, pipi, dagu",
        desc: "Pori-pori kulit besar terutama di area hidung, pipi, dagu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G8",
        name: "Kulit di bagian wajah terlihat mengkilat",
        desc: "Kulit di bagian wajah terlihat mengkilat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G9",
        name: "Sering ditumbuhi jerawat",
        desc: "Sering ditumbuhi jerawat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G10",
        name: "Kulit kelihatan kering sekali",
        desc: "Kulit kelihatan kering sekali",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G11",
        name: "Pori-pori halus",
        desc: "Pori-pori halus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G12",
        name: "Tekstur kulit wajah tipis",
        desc: "Tekstur kulit wajah tipis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G13",
        name: "Cepat menampakan kerutan-kerutan",
        desc: "Cepat menampakan kerutan-kerutan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "G14",
        name: "Sebagian kulit kelihatan berminyak",
        desc: "Sebagian kulit kelihatan berminyak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "G15",
        name: "Sebagian kulit kelihatan kering",
        desc: "Sebagian kulit kelihatan kering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G16",
        name: "Kadang berjerawat",
        desc: "Kadang berjerawat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G17",
        name: "Susah mendapatkan hasil polesan kosmetik yang sempurna",
        desc: "Susah mendapatkan hasil polesan kosmetik yang sempurna",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G18",
        name: "Mudah alergi",
        desc: "Mudah alergi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G19",
        name: "Mudah iritasi dan terluka",
        desc: "Mudah iritasi dan terluka",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "G20",
        name: "Kulit mudah terlihat kemerahan",
        desc: "Kulit mudah terlihat kemerahan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   id: "G21",
      //   name: "Tenggorokan nyeri",
      //   desc: "Tenggorokan nyeri",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "G22",
      //   name: "Telinga nyeri saat mengunyah",
      //   desc: "Telinga nyeri saat mengunyah",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "G23",
      //   name: "Telinga berdengung",
      //   desc: "Telinga berdengung",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "G24",
      //   name: "Telinga mendengkur",
      //   desc: "Telinga mendengkur",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("gejala", null, {});
  },
};
