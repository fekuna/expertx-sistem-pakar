"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Penyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Gejala, Penyakit_Gejala }) {
      // define association here
      Penyakit.belongsToMany(Gejala, {
        through: "Penyakit_Gejala",
        foreignKey: "penyakitId",
        as: "gejala",
        uniqueKey: "penyakitId",
      });

      Penyakit.hasMany(Penyakit_Gejala, { foreignKey: "penyakitId" });
    }
  }
  Penyakit.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      solusi: {
        type: DataTypes.STRING,
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