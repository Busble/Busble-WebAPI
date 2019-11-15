const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  "development": {
    "username": "busble",
    "password": "busblepw",
    "database": "busble",
    "host": "127.0.0.1",
    "dialect": "mariadb",
    "operatorsAliases": Op,
    "dialectOptions": {
      "timezone": "asia/bangkok"
    },
    "timezone": "asia/bangkok",
    "define":{
      "timestamps":true,
      "underscored": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "busble",
    "password": "busblepw",
    "database": "busble",
    "host": "127.0.0.1",
    "dialect": "mariadb",
    "operatorsAliases": false,
    "dialectOptions": {
      "timezone": "asia/bangkok"
    },
    "timezone": "asia/bangkok",
    "define":{
      "timestamps":true,
      "underscored": true
    }
  }
}
