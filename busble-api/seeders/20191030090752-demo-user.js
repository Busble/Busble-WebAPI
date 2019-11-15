'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        username: 'demo1',
        password: bcrypt.hashSync('123456', 10),
        firstname: 'tassanai',
        lastname: 'singprom',
        avatar: null,
        roles: 'poster',
        status: 'active',
        telno: null,
        email: null
      },
      {
        username: 'demo2',
        password: bcrypt.hashSync('123456', 10),
        firstname: 'BubuMan',
        lastname: 'Finnale',
        avatar: null,
        roles: 'poster',
        status: 'active',
        telno: null,
        email: null
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
