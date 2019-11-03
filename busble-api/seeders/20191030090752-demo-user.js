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
        username: 'demo1',
        password: '123456',
        firstname: 'firstname_demo1',
        lastname: 'lastname_demo1',
        thumbnail: null,
        gender: 'male',
        status: 'active',
        telno_verify: false,
        email_verify: false
      },
      {
        username: 'demo2',
        password: '123456',
        firstname: 'firstname_demo2',
        lastname: 'lastname_demo2',
        thumbnail: null,
        gender: 'female',
        status: 'active',
        telno_verify: false,
        email_verify: false
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
