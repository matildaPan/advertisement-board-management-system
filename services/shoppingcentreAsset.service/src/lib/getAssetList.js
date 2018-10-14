const Asset = require("../database/models").Asset;

const assetList = async (ctx) => {
  const data = Asset.findAll({where: {deletedAt: null}});
  return {data};
}

module.exports = assetList;