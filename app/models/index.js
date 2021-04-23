const dbConfig = require("../config/pg.config.js");

const sequelize = require("sequelize");

const sqlz = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};

db.sequelize = sequelize;
db.sqlz = sqlz;

db.users = require("./user.model.js")(sqlz, sequelize);

module.exports = db;