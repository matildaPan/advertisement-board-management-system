module.exports = (sequelize, DataTypes) => {
	const Asset = sequelize.define("Asset", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		name: DataTypes.STRING,
		width: DataTypes.INTEGER,
		height: DataTypes.INTEGER,
    location: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    shoppingCentreId: {
			allowNull: false,
			type: DataTypes.UUID,
			field: "shopping_centre_id"
    },
		createdAt: {
			type: DataTypes.DATE,
			field: "created_at"
		},
		updatedAt: {
			type: DataTypes.DATE,
			field: "updated_at"
		},
		deletedAt: {
			type:DataTypes.DATE,
			field: "deleted_at"
		}
	});
	Asset.associate = function(models) {
    Asset.belongsTo(models.ShoppingCentre, {foreignKey: "shopping_centre_id", targetKey: "id"});
	};
	return Asset;
};