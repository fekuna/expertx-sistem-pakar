"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("penyakit", [
      // {
      //   id: "P1",
      //   name: "Kulit normal",
      //   solusi: "banyakin doa",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "P2",
      //   name: "Kulit berminyak",
      //   solusi: "Jangan mengorek kuping",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "P3",
      //   name: "Kulit kering",
      //   solusi: "jangan banyak begadang",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "P4",
      //   name: "Kulit kombinasi",
      //   solusi: "Sinusoidal kali dah",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   id: "P5",
      //   name: "Kulit sensitif",
      //   solusi: "Cari di google coba",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        id: "P1",
        name: "Otitis",
        penjelasan:
          "Otitis adalah sakit atau peradangan pada saluran pendengaran, yang ditandai dengan nyeri, demam, hilangnya pendengaran, tinitus dan vertigo",
        solusi:
          "Bersihkan telinga segera mungkin dan berikan obat tetes telinga. Jika tidak ada perubahan silahkan dibawa ke dokter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P2",
        name: "Feline  Urologic Syndrome (FUS)",
        penjelasan:
          "Feline Urologic Syndrome (FUS) adalah gangguan saluran kemih yang sering terjadi pada kucing, terutama kucing jantan",
        solusi:
          "Pergantian makanan untuk kesehatan urineri, lebih baik langsung dibawa ke dokter.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P3",
        name: "Gastritis",
        penjelasan:
          "Gastritis adalah radang selaput lendir kucing, yang bisa bersifat akut (tepat waktu) atau kronis. Ini adalah salah satu kondisi paling umum pada kucing",
        solusi:
          "Solusi pertama adalah memberi kucing diet dan secara teratur menawarkan dia minum. Jika segera memuntahkan air yang dicerna, minumlah dalam jumlah kecil selama beberapa jam dan hilangkan asupan makanan apa pun. Jika semakin parah silahkan dibawa ke dokter hewan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P4",
        name: "Dermatofitosis",
        penjelasan:
          "Dermatofitosis (ringworm) merupakan keratinisasi berlebih yang terdapat pada permukaan terluar kulit (epidermis) termasuk kuku dan rambut",
        solusi: "Grooming seminggu sekali, hindari tempat lembab",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P5",
        name: "Abses",
        penjelasan:
          "Abses bisa terbentuk setelah kucing Anda digigit oleh kucing atau hewan lain. Bakteri yang masuk ke dalam luka gigitanlah penyebabnya",
        solusi:
          "Harus ke dokter untuk dibersihkan luka,sebagian besar memerlukan obat anastesi agar optimal pembersihan lukanya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P6",
        name: "Stomatitis",
        penjelasan:
          "Stomatitis kucing adalah peradangan hebat dan menyakitkan pada mulut dan gusi kucing",
        solusi:
          "Dicoba dengan memberikan makanan basah/wet food dan berikan vitamin nafsu makan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P7",
        name: "Konjungtivitis",
        penjelasan:
          "Konjungtivitis adalah radang pada konjungtiva, yaitu membran dalam berwarna merah muda di mata",
        solusi:
          "Berikan obat tetes mata untuk hewan dan bersihkan mata setiap hari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P8",
        name: "Scabiosis",
        penjelasan:
          "Scabiosis pada kucing merupakan penyakit yang menular disebabkan oleh tungau Notoedres cati dari genus Sarcoptes",
        solusi:
          "Segera ke dokter untuk diinjeksi anti parasit agar optimal. Jaga kebersihan lingkungan sekitar kucing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P9",
        name: "Gastroenteritis",
        penjelasan:
          "Gastroenteritis (diare) yang  kebanyakan disebabkan oleh sesuatu yang dimakan oleh kucing atau perubahan makanan yang mendadak.",
        solusi: "Berikan makanan khusus untuk kesehatan pencernaan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P10",
        name: "Helminthiasis",
        penjelasan:
          "Helminthiasis (Cacingan) adalah jenis penyakit yang disebabkan oleh parasit cacing. Empat jenis cacing yang paling sering menginfeksi kucing  adalah cacing gelang, cacing tambang, cacing pita, dan cacing hati.",
        solusi: "Berikan obat cacing, biasa dapat dibeli di petshop.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P11",
        name: "Gingivitis",
        penjelasan:
          "Gingivitis merupakan radang gusi yang muncul sebagai garis merah tua di sepanjang garis gigi/gusi.",
        solusi:
          "membersihkan mulut sebisa mungkin dan mengembalikan seperti kondisi normal. Jika infeksi sudah terlampau parah sehingga ada timbunan nanah pada gusi. Silahkan dibawa kedokter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "P12",
        name: "Calicivirus",
        penjelasan:
          "Calicivirus adalah penyakit yang menyerang bagian pernapasan. Penyakit ini disebabkan oleh virus dan bakteri seperti Chlaydia dan rhinotracheites yang dapat dengan mudah ditularkan ke kucing lain",
        solusi:
          "Berikan vitamin. Jika tidak ada perubahan segera dibawa ke dokter karena tingkat kematian tinggi.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("penyakit", null, {});
  },
};
