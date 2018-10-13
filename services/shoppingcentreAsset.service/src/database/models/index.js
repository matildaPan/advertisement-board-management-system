"use strict";

let Sequelize = require("sequelize");
let Environment = require("./environment");
let Product = require("./product");
let ProductEnvironment = require("./productenvironment");

let db = {};

const sequelize = new Sequelize(
	"mysql://"
	+process.env.MYSQL_ROOT
	+":"+process.env.MYSQL_ROOT_PASSWORD
	+"@"+process.env.MYSQL_HOST
	+":"+process.env.MYSQL_PORT
	+"/"+process.env.MYSQL_DATABASE);
  
db.Environment = Environment(sequelize, Sequelize);
db.Product = Product(sequelize, Sequelize);
db.ProductEnvironment = ProductEnvironment(sequelize, Sequelize);

Object.keys(db).forEach(function(modelName) {
	if (db[modelName].associate) {		
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;