module.exports = {
  development: {
    username: "root",
    password: "2u2T4NC14L6H42",
    database: "mor_db",
    host: "127.0.0.1",
    port: 3307,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
