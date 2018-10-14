const Asset = require('../database/models').Asset;

const softDeleteAsset = async (ctx) => {
  const data = await Asset.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Asset is not found', status: 404};
  }else{
    try {
      const result = Asset.update({deletedAt: new Date()}, {where: {id: ctx.params.id}});
      return{data: result}; 
    } catch (error) {
      console.error(error);
      return {message: 'unable to delete asset', status: 500};
    }
  }
};

module.exports = softDeleteAsset;