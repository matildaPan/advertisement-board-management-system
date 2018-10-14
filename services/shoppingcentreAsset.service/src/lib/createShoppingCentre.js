const ShoppingCentre = require("../database/models").ShoppingCentre;
let uuid = require("uuid/v4");

const createShoppingCentre = async (ctx) => {
  const combinedParams = Object.assign({}, ctx.params, {id: uuid(), createdAt: new Date(), updatedAt: new Date()} );
  let data = ShoppingCentre.create(combinedParams);
  return await {data};
}

module.exports = createShoppingCentre;