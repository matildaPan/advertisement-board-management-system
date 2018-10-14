const Asset = require('../database/models').Asset;

const getAssetById = async (ctx) => {
  const data = await Asset.findOne({where: {id: ctx.params.id, deletedAt: null}});
  if(!data){
    return {message: 'Asset is not found', status: 404};
  }else{
    return {data};
  }
};

module.exports = getAssetById;
