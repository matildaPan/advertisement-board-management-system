const getShoppingCentreList = require("./getShoppingCentreList");
const createShoppingCentre = require("./createShoppingCentre");
const getShoppingCentreById = require("./getShoppingCentreById");
const updateShoppingCentre = require("./updateShoppingCentre");
const softDeleteShoppingCentre = require("./softDeleteShoppingCentre");

module.exports = {
  getShoppingCentreList,
  createShoppingCentre,
  getShoppingCentreById,
  updateShoppingCentre,
  softDeleteShoppingCentre
}