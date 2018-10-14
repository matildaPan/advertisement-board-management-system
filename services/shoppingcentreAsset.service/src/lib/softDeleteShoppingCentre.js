const ShoppingCentre = require('../database/models').ShoppingCentre;
const Asset = require('../database/models').Asset;

const softDeleteShoppingCentre = async (ctx) => {
  const data = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    try {
      await ShoppingCentre.update({deletedAt: new Date()}, {where: {id: ctx.params.id}});
      const shoppingCentres = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
      const associatedAssets = await Asset.findAll({where: {shoppingCentreId: ctx.params.id}});
      await Asset.update({deletedAt: new Date()}, {where: {shoppingCentreId: ctx.params.id}});
      const assets = await Asset.findAll({where: {shoppingCentreId: ctx.params.id}});
      const log = {
        entity: 'shoppingCentre',
        event: 'softdelete',
        entityId: ctx.params.id,
        userId: ctx.meta.reqTokenData.userId,
        eventTimestamp: new Date(),
        newData: {shoppingCentres, assets},
        previousData: {shoppingCentres: data, assets: associatedAssets}
      };
      ctx.call('auditlog.eventLogger', log);
      return {data: {shoppingCentres, assets}};
    } catch (error) {
      console.error(error);
      return {message: 'cannot delete shopping centre', status: 500};
    }
  }
};

module.exports = softDeleteShoppingCentre;