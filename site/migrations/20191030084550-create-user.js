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
      firstname: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: true, 
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'inactive'
      },
      image: {
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