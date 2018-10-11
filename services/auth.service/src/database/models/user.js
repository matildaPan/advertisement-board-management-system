module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		name: DataTypes.STRING,
		role: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
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
	Account.associate = function() {
	};
	return Account;
};