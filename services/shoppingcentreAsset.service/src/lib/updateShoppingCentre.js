const ShoppingCentre = require('../database/models').ShoppingCentre;

const updateShoppingCentre = async (ctx) => {
  const data = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    const combinedParams = Object.assign({}, ctx.params, {updatedAt: new Date()});
    try {
      await ShoppingCentre.update(combinedParams, {where: {id: ctx.params.id}});
      const result = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
      const log = {
        entity: 'shoppingCentre',
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
      return {message: 'unable to update shopping centre', status: 500};
    }
  }
};

module.exports = updateShoppingCentre;