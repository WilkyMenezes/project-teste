const { ssl } = require("pg/lib/defaults");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_BASE, process.env.DB_USER,process.env.DB_PASS, {
  dialect: 'postgres',
  ssl: true,
  protocol: "postgres",
  longging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});


module.exports = sequelize;