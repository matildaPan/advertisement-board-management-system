const Asset = require('../database/models').Asset;

const updateAsset = async (ctx) => {
  const data = await Asset.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    const combinedParams = Object.assign({}, ctx.params, {updatedAt: new Date()});
    try {
      await Asset.update(combinedParams, {where: {id: ctx.params.id}});
      const result = await Asset.findOne({where: {id: ctx.params.id}});
      const log = {
        entity: 'asset',
        event: 'update',
        entityId: result.id,
        userId: ctx.meta.reqTokenData.userId,
        eventTimestamp: new Date(),
        newData: result,
        previousData: data
      };
      ctx.call('auditlog.eventLogger', log);
      return{data: result}; 
    } catch (error) {
      console.error(error);
      return {message: 'unable to update asset', status: 500};
    }
  }
};

module.exports = updateAsset;