const { Sequelize } = require("sequelize");

module.exports = new Sequelize("sistem_pakar_ta", "fekuna", "", {
  host: "localhost",
  dialect: "postgres",
  logging: (sql, queryObject) => {
    console.log(sql);
  },
});
