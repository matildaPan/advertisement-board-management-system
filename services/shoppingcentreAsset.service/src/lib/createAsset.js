const Asset = require('../database/models').Asset;
let uuid = require('uuid/v4');

const createAsset = async (ctx) => {
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

};

module.exports = createAsset;