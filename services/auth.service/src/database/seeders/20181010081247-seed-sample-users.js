'use strict';
const users = require('../constants/user.constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: users.admin.id,
      name: users.admin.name,
      role: users.admin.role,
      username: users.admin.username,
      password: users.admin.password,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: users.guest.id,
      name: users.guest.name,
      role: users.guest.role,
      username: users.guest.username,
      password: users.guest.password,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {

  }
};