'use strict';
const shoppingCentres = require('../constants/shoppingCentre.constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const shoppingCentre1 = shoppingCentres.shoppingCentre1;
    const shoppingCentre2 = shoppingCentres.shoppingCentre2;
    const shoppingCentre3 = shoppingCentres.shoppingCentre3;
    return queryInterface.bulkInsert('ShoppingCentres', [{
      ...shoppingCentre1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      ...shoppingCentre2,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      ...shoppingCentre3,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {

  }
};