const Asset = require('../database/models').Asset;

const assetList = async (ctx) => {
  let filter = { 
    where: {
      deletedAt: null
    } 
  };

  if(ctx.params.shoppingCentrId) {
    filter.where.shoppingCentreId = ctx.params.shoppingCentrId;
  }
  
  let data = await Asset.findAll(filter);
  
  return {data};
};

module.exports = assetList;