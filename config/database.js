const { Sequelize } = require("sequelize");

module.exports = new Sequelize("sistem_pakar_ta", "root", "asd123", {
  host: "localhost",
  dialect: "mariadb",
  logging: (sql, queryObject) => {
    console.log(sql);
  },
});
