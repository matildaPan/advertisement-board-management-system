'use strict';

const actions = require('./lib');


const handler = (func) => {
  return async (ctx) =>{
    try {
      return await func(ctx);
    } catch (error) {
      console.log(error);
    }
  };
		
};

module.exports = {
  name: 'auditlog',
  settings: {},
  metadata: {},

  actions: {
    eventLogger: handler(actions.eventLogger),
  },

  events: {

  },

  created() {
    console.log('Audit Log created ...');
  },
  started() {
    console.log('Audit Log started ...');
  },
  stopped(broker) {
  },

};