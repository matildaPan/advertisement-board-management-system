const shoppingCentreConstants = require('./shoppingCentre.constants');

const asset1 = {
  id: '7ad67d7d-eabc-4dd6-9292-d15395ae9084',
  name: 'entre billboard',
  width: 1,
  height: 2,
  location: 'in front of Priceline at second floor',
  active: false,
  shopping_centre_id: shoppingCentreConstants.shoppingCentre1Id
};

const asset2 = {
  id: 'e768f5f8-138c-4177-bcd6-4bee62c4866a',
  name: 'main billboard',
  width: 2,
  height: 3,
  location: 'on east side of ground floor',
  active: true,
  shopping_centre_id: shoppingCentreConstants.shoppingCentre1Id
};

const asset3 = {
  id: '743952ec-53c3-4d08-a0e5-ed7c0b387856',
  name: 'samll board',
  width: 2,
  height: 3,
  location: 'near the escalator on the third floor',
  active: true,
  shopping_centre_id: shoppingCentreConstants.shoppingCentre2Id
};

const asset4 = {
  id: '5db01cda-934c-4895-b9ee-3056d021c78f',
  name: 'pharmacy billboard',
  width: 2,
  height: 3,
  location: 'near chemistwarehouse',
  active: true,
  shopping_centre_id: shoppingCentreConstants.shoppingCentre3Id
};

module.exports = {
  asset1,
  asset2,
  asset3,
  asset4
};

