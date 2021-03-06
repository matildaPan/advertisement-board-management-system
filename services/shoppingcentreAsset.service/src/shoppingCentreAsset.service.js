'use strict';

const umzugMigration = require('./provider/migration');
const umzugSeeder = require('./provider/seeder');
const { MoleculerClientError } = require('moleculer').Errors;
const actions = require('./lib');

const handler = (func) => {
  return async (ctx) =>{
    let result;
    try {
      result = await func(ctx);
    } catch (error) {
      console.log(error);
    }
    if(result.data == null){
      throw new MoleculerClientError(result.message, result.status, null, {params: ctx.params});
    }
    return result.data;
  };
		
};

module.exports = {
  name: 'shoppingcentreasset',
  settings: {},
  metadata: {},

  actions: {
    shoppingCentreList: handler(actions.getShoppingCentreList),
    createShoppingCentre: handler(actions.createShoppingCentre),
    getShoppingCentreById: handler(actions.getShoppingCentreById),
    updateShoppingCentre: handler(actions.updateShoppingCentre),
    softDeleteShoppingCentre: handler(actions.softDeleteShoppingCentre),
    getAssetList: handler(actions.getAssetList),
    createAsset: handler(actions.createAsset),
    updateAsset: handler(actions.updateAsset),
    getAssetById: handler(actions.getAssetById),
    softDeleteAsset: handler(actions.softDeleteAsset)
  },

  events: {

  },

  created() {
    umzugMigration.up();
    let broker = this.broker;
    setInterval(() => {
      if (!broker.transit.tx.connected) {
        console.error('Lost connection to TRANSPORTER, killing process...');
        broker.stop();
        process.exit(0);
      }
    }, 10000);

  },
  started() {
    console.log('START SEEDING........');
    umzugSeeder.up();
  },
  stopped(broker) {
  },

};