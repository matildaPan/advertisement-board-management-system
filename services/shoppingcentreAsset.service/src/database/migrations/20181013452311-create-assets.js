"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Asset", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID
			},
			name: {
				type: Sequelize.STRING
			},
			width: {
				type: Sequelize.INTEGER
      },
      height: {
				type: Sequelize.INTEGER
      },
      location: {
				type: Sequelize.STRING
      },
      active:{
        type: Sequelize.BOOLEAN
      },
      shopping_centre_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "ShoppingCentre",
          key: "id"
        }
      },
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			deleted_at:{
				type: Sequelize.DATE,
				allowNull: true
			}
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable("Asset");
	}
};