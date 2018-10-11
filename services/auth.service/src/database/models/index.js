"use strict";

let Sequelize = require("sequelize");
let User = require("./user");
let db = {};

const sequelize = new Sequelize(
	"mysql://"
	+process.env.MYSQL_USER
	+":"+process.env.MYSQL_PASSWORD
	+"@"+process.env.MYSQL_HOST
	+":"+process.env.MYSQL_PORT
	+"/"+process.env.MYSQL_DATABASE);

db.User = User(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;