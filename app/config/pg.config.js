module.exports = {
    HOST: "localhost",
    USER: "test123",
    PASSWORD: "test123",
    DB: "node-backenddb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };