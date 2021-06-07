"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Penyakit_Gejala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Gejala, Penyakit }) {
      // define association here
      Penyakit_Gejala.belongsTo(Gejala, {
        foreignKey: "gejalaId",
        onDelete: "CASCADE",
      });
      Penyakit_Gejala.belongsTo(Penyakit, {
        foreignKey: "penyakitId",
        onDelete: "CASCADE",
      });
    }
  }
  Penyakit_Gejala.init(
    {
      penyakitId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Penyakit",
          key: "id",
        },
      },
      gejalaId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Gejala",
          key: "id",
        },
      },
      cfp: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Penyakit_Gejala",
      tableName: "penyakit_gejala",
    }
  );
  return Penyakit_Gejala;
};
