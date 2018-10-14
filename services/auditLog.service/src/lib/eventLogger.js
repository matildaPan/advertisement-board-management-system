let client = require('./elasticsearchClient');

const eventLogger = async (ctx) => {
  console.log(JSON.stringify({log: ctx.params}));

  await client.index({
    index: 'event',
    type: 'eventLog',
    body: ctx.params
  });

};
module.exports = eventLogger;