"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ history_diagnosis, Penyakit }) {
      // define association here

      // User.belongsToMany(Penyakit, {
      //   through: "history_diagnosis",
      //   foreignKey: "userId",
      //   as: "users",
      //   uniqueKey: "userId",
      //   // onDelete: "NO ACTION",
      //   // onUpdate: "CASCADE",
      //   // constraints: false,
      // });
      User.hasMany(history_diagnosis, {
        foreignKey: "userId",
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
        // constraints: false,
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: false,
      },
      name: {
        type: DataTypes.STRING(50),
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(10),
        defaultValue: "user",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
