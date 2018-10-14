const ShoppingCentre = require("../database/models").ShoppingCentre;

const shoppingCentreList = async () => {
  let data = await ShoppingCentre.findAll({where: {deletedAt: null}});

  return {data};
}

module.exports = shoppingCentreList;