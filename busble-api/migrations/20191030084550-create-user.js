'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      password: {
<<<<<<< HEAD:busble-api/migrations/20191030084550-create-user.js
        type: Sequelize.STRING,
        allowNull: false, 
      },
      firstname: {
=======
>>>>>>> a0153b56e041318e21f0dfa750e16689c3fa7471:busble-api/migrations/20191030084550-create-user.js
        type: Sequelize.STRING,
        allowNull: false, 
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
<<<<<<< HEAD:busble-api/migrations/20191030084550-create-user.js
      avatar: {
=======
      gender: {
>>>>>>> a0153b56e041318e21f0dfa750e16689c3fa7471:busble-api/migrations/20191030084550-create-user.js
        type: Sequelize.STRING,
        allowNull: true,
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'inactive'
      },
      telno: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};