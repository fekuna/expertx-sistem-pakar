"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gejala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Penyakit, Penyakit_Gejala }) {
      // define association here
      Gejala.belongsToMany(Penyakit, {
        through: "Penyakit_Gejala",
        foreignKey: "gejalaId",
        as: "penyakit",
        uniqueKey: "gejalaId",
        onDelete: "CASCADE",
      });
      Gejala.hasMany(Penyakit_Gejala, {
        foreignKey: "gejalaId",
        onDelete: "CASCADE",
      });
    }
  }
  Gejala.init(
    {
      gejalaId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(12),
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      question: DataTypes.STRING(150),
    },
    {
      sequelize,
      modelName: "Gejala",
      tableName: "gejala",
    }
  );
  return Gejala;
};
