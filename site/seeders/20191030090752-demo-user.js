'use strict';

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
        username: 'demo',
        firstname: 'tassanai',
        lastname: 'singprom',
        images: null,
        roles: 'admin',
        status: 'active',
        image: null
      },
      {
        username: 'demo2',
        firstname: 'firstname_demo2',
        lastname: 'lastname_demo2',
        images: null,
        roles: 'user',
        status: 'active',
        image: null
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
