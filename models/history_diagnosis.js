"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class history_diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Penyakit, User}) {
      // define association here
      history_diagnosis.belongsTo(User, { foreignKey: "userId" });
      history_diagnosis.belongsTo(Penyakit, { foreignKey: "penyakitId" });
    }
  }
  history_diagnosis.init(
    {
      penyakitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "penyakit",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      hasil: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "history_diagnosis",
    }
  );
  return history_diagnosis;
};