"use strict";
const assets = require("../constants/asset.constants");

module.exports = {
	up: (queryInterface, Sequelize) => {
    const asset1 = assets.asset1;
    const asset2 = assets.asset2;
    const asset3 = assets.asset3;
    const asset4 = assets.asset4;

		return queryInterface.bulkInsert("Asset", [{
			...asset1,
			created_at: new Date(),
			updated_at: new Date()
		}, {
      ...asset2,
			created_at: new Date(),
			updated_at: new Date()
    }, {
      ...asset3,
      created_at: new Date(),
			updated_at: new Date()
    }, {
      ...asset4,
      created_at: new Date(),
			updated_at: new Date()
    }]);
	},

	down: (queryInterface, Sequelize) => {

	}
};