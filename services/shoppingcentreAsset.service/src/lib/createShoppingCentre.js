const ShoppingCentre = require('../database/models').ShoppingCentre;
let uuid = require('uuid/v4');

const createShoppingCentre = async (ctx) => {
  const combinedParams = Object.assign({}, ctx.params, {id: uuid(), createdAt: new Date(), updatedAt: new Date()} );
  try {    
    const data = await ShoppingCentre.create(combinedParams);
    const log = {
      entity: 'shoppingCentre',
      event: 'update',
      entityId: data.id,
      userId: ctx.meta.reqTokenData.userId,
      eventTimestamp: new Date(),
      newData: data,
      previousData: {}
    };
    ctx.call('auditlog.eventLogger', log);
    return {data};
  } catch (error) {
    console.error(error);
    return {message: 'unable to create a shopping centre...', status: 500};
  }
};

module.exports = createShoppingCentre;