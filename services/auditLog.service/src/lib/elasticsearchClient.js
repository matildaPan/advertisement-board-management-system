let elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: 'http://elasticsearch:9200',
  log: 'trace'
});

module.exports = client;