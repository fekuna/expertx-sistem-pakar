"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("gejala", [
      // {
      //   gejalaId: "G1",
      //   name: "Luka ditelinga",
      //   question: "Apakah mempunyai luka di telinga?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G2",
      //   name: "Nafsu makan berkurang",
      //   question: "Apakah nafsu makan berkurang?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G3",
      //   name: "Telinga ada cairan",
      //   question: "Apakah ada cairan di telinga?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G4",
      //   name: "Muntah",
      //   question: "Apakah kucing anda muntah-muntah?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G5",
      //   name: "Lemas",
      //   question: "Apakah kucing anda terlihat lemas?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G6",
      //   name: "Nafas cepat",
      //   question: "Apakah nafas kucing anda cepat, tidak seperti biasanya?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G7",
      //   name: "Demam",
      //   question: "Apakah kucing anda demam?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G8",
      //   name: "Kandung kemih keras",
      //   question: "Apakah kandung kemih terasa keras saat disentuh?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G9",
      //   name: "Jamur kulit",
      //   question: "Apakah ada jamur pada kulit?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G10",
      //   name: "Gusi merah",
      //   question: "Apakah gusinya terlihat merah?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G11",
      //   name: "Diare",
      //   question: "Apakah kucing anda diare?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G12",
      //   name: "Luka berisi nanah",
      //   question: "Apakah ada luka yang berisi nanah?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G13",
      //   name: "Sariawan",
      //   question: "Apakah kucing anda sariawan?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // {
      //   gejalaId: "G14",
      //   name: "Mata merah",
      //   question: "Apakah mata kucing anda memerah?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      // {
      //   gejalaId: "G15",
      //   name: "Mata bengkak",
      //   question: "Apakah mata kucing anda membengkak?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G16",
      //   name: "Mata berair",
      //   question: "Apakah mata kucing anda berair?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G17",
      //   name: "Bersin",
      //   question: "Apakah kucing anda bersin-bersin?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G18",
      //   name: "Liuran",
      //   question: "Apakah kucing anda mengeluarkan liur berlebihan?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G19",
      //   name: "BAB cacing",
      //   question: "Apakah BAB kucing anda mengeluarkan cacing?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G20",
      //   name: "Muntah cacing",
      //   question: "Apakah kucing anda memuntahkan cacing?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G21",
      //   name: "Menggaruk berlebihan",
      //   question: "Apakah kucing anda sering menggaruk-garuk?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G22",
      //   name: "Telinga Kotor",
      //   question: "Apakah telinga kucing anda kotor?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G23",
      //   name: "Bulu Rontok",
      //   question: "Apakah bulu kucing anda rontok?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   gejalaId: "G24",
      //   name: "Kerak di telinga",
      //   question: "Apakah kucing anda memiliki kerak di telinga?",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

      {
        gejalaId: "G1",
        name: "Luka garukan ditelinga",
        question: "Apakah mempunyai luka garukan di telinga?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G2",
        name: "Telinga terdapat cairan",
        question: "Apakah telinga mengeluarkan cairan?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G3",
        name: "Telinga berbau",
        question: "Apakah telinga kucing anda berbau tidak sedap?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G4",
        name: "Telinga bengkak",
        question: "Apakah telinga kucing anda bengkak?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G5",
        name: "Demam",
        question: "Apakah kucing anda demam?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G6",
        name: "Nafsu makan berkurang",
        question: "Apakah nafsu makan kucing anda berkurang?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G7",
        name: "Muntah",
        question: "Apakah kucing anda muntah-muntah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G8",
        name: "Kandung kemih keras",
        question: "Apakah kandung kemih terasa keras saat disentuh?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G9",
        name: "Baru lahiran",
        question: "Apakah kucing anda baru lahiran?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G10",
        name: "Jamur kulit",
        question: "Apakah terdapat jamur pada kulit kucing anda?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G11",
        name: "Gusi merah",
        question: "Apakah gusi kucing anda memerah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G12",
        name: "Terdapat luka",
        question: "Apakah terdapat luka pada kucing anda?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G13",
        name: "Luka keluar nanah",
        question: "Apakah kucing anda luka dan mengeluarkan cairan atau nanah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        gejalaId: "G14",
        name: "Sariawan",
        question: "Apakah kucing anda sariawan?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        gejalaId: "G15",
        name: "Lemas",
        question: "Apakah kucing anda menjadi lemas?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G16",
        name: "Mata bengkak",
        question: "Apakah mata kucing anda bengkak?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G17",
        name: "Mata merah",
        question: "Apakah mata kucing anda memerah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G18",
        name: "Mata berair",
        question: "Apakah mata kucing anda berair berlebihan?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G19",
        name: "Diare",
        question: "Apakah kucing anda diare?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G20",
        name: "Liuran",
        question: "Apakah kucing anda mengeluarkan liur berlebihan?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G21",
        name: "Terdapat Scabies",
        question: "Apakah terdapat scabies pada kucing anda?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G22",
        name: "Kerak telinga",
        question: "Apakah terdapat kerak tebal pada telinga?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G23",
        name: "Muntah cacing",
        question: "Apakah kucing anda memuntahkan cacing?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G24",
        name: "Bab cacing",
        question: "Apakah BAB kucing anda mengeluarkan cacing?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G25",
        name: "Telinga merah",
        question: "Apakah telinga kucing anda memerah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G26",
        name: "Liur bau",
        question: "Apakah kucing anda mengeluarkan liur berbau tidak sedap?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G27",
        name: "Bersin",
        question: "Apakah kucing anda bersin-bersin?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G28",
        name: "Menggaruk telinga",
        question: "Apakah kucing anda sering menggaruk-garuk telinga?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G29",
        name: "Telinga kotor",
        question: "Apakah telinga kucing anda kotor?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G30",
        name: "Telinga berkutu",
        question: "Apakah terdapat kutu pada telinga kucing anda?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G31",
        name: "Sesak nafas",
        question: "Apakah nafas kucing anda terlihat sesak?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gejalaId: "G32",
        name: "Hidung basah",
        question: "Apakah hidung kucing anda basah?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("gejala", null, {});
  },
};
