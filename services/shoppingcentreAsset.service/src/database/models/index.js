'use strict';

let Sequelize = require('sequelize');
let ShoppingCentre = require('./shoppingCentre');
let Asset = require('./asset');

let db = {};

const sequelize = new Sequelize(
  'mysql://'
	+process.env.MYSQL_ROOT
	+':'+process.env.MYSQL_ROOT_PASSWORD
	+'@'+process.env.MYSQL_HOST
	+':'+process.env.MYSQL_PORT
	+'/'+process.env.MYSQL_DATABASE);
  
db.ShoppingCentre = ShoppingCentre(sequelize, Sequelize);
db.Asset = Asset(sequelize, Sequelize);

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {		
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;