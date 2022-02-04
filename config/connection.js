const Sequelize = require("sequelize");

require("dotenv").config();

// create connestion to our database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW, // dont know if this shit works
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
