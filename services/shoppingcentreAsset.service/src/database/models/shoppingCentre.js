module.exports = (sequelize, DataTypes) => {
  const ShoppingCentre = sequelize.define('ShoppingCentre', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
    deletedAt: {
      type:DataTypes.DATE,
      field: 'deleted_at'
    }
  });
  ShoppingCentre.associate = function(models) {
    ShoppingCentre.hasMany(models.Asset, {foreignKey: 'shopping_centre_id', sourceKey: 'id'});
  };
  return ShoppingCentre;
};