"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Penyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Gejala, Penyakit_Gejala, User, history_diagnosis }) {
      // define association here
      Penyakit.belongsToMany(Gejala, {
        through: "Penyakit_Gejala",
        foreignKey: "penyakitId",
        as: "gejala",
        uniqueKey: "penyakitId",
        onDelete: "CASCADE",
      });

      Penyakit.hasMany(Penyakit_Gejala, {
        foreignKey: "penyakitId",
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
      });

      // Penyakit.belongsToMany(User, {
      //   through: "history_diagnosis",
      //   foreignKey: "penyakitId",
      //   as: "penyakit",
      //   uniqueKey: "penyakitId",
      //   // onDelete: "NO ACTION",
      //   // onUpdate: "CASCADE",
      //   // constraints: false,
      // });

      // Penyakit.hasMany(history_diagnosis, {
      //   foreignKey: "penyakitId",
      //   // onDelete: "NO ACTION",
      //   // onUpdate: "CASCADE",
      //   // constraints: false,
      // });
    }
  }
  Penyakit.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      penjelasan: {
        type: DataTypes.TEXT,
      },
      solusi: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Penyakit",
      tableName: "penyakit",
    }
  );
  return Penyakit;
};
