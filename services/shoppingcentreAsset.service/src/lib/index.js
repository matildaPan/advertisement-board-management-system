const getShoppingCentreList = require('./getShoppingCentreList');
const createShoppingCentre = require('./createShoppingCentre');
const getShoppingCentreById = require('./getShoppingCentreById');
const updateShoppingCentre = require('./updateShoppingCentre');
const softDeleteShoppingCentre = require('./softDeleteShoppingCentre');
const getAssetList = require('./getAssetList');
const createAsset = require('./createAsset');
const updateAsset = require('./updateAsset');
const getAssetById = require('./getAssetById');
const softDeleteAsset = require('./softDeleteAsset');

module.exports = {
  getShoppingCentreList,
  createShoppingCentre,
  getShoppingCentreById,
  updateShoppingCentre,
  softDeleteShoppingCentre,
  getAssetList,
  createAsset,
  updateAsset,
  getAssetById,
  softDeleteAsset
};
