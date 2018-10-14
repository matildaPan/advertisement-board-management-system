const Sequelize = require('sequelize');
let Umzug = require('umzug');
let path = require('path');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE, 
  'root', 
  'root', {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

  });

const getUmzug = (file) => new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize,
  },
  migrations: {
    params: [
      sequelize.getQueryInterface(), // queryInterface
      sequelize.constructor, // DataTypes
      function() {
        throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
      }
    ],
    path: path.resolve(__dirname, file),
    pattern: /\.js$/
  },

  logging: function() {
    console.log.apply(null, arguments);
  },
});


module.exports = getUmzug;