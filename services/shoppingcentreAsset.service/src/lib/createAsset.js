const Asset = require('../database/models').Asset;
const ShoppingCentre = require('../database/models').ShoppingCentre;
let uuid = require('uuid/v4');

const createAsset = async (ctx) => {
  const shoppingCentre = await ShoppingCentre.findOne({where: {id: ctx.params.shoppingCentreId, deletedAt: null}});
  console.log({shoppingCentre});
  if(!shoppingCentre){
    return {message: 'invalid shopping centre id', status: 400};
  }else{
    const combinedParams = Object.assign({}, ctx.params, {id: uuid(), createdAt: new Date(), updatedAt: new Date()} );
    try {    
      const data = await Asset.create(combinedParams);
      const log = {
        entity: 'asset',
        event: 'create',
        entityId: data.id,
        userId: ctx.meta.reqTokenData.userId,
        eventTimestamp: new Date(),
        newData:data,
        previousData: {}
      };
      ctx.call('auditlog.eventLogger', log);
      return {data};
    } catch (error) {
      console.error(error);
      return {message: 'unable to create an asset...', status: 500};
    }
  
  }
};
  

module.exports = createAsset;