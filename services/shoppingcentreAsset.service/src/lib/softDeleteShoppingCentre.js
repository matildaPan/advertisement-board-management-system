const ShoppingCentre = require("../database/models").ShoppingCentre;
const Asset = require("../database/models").Asset;

const softDeleteShoppingCentre = async (ctx) => {
  const data = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    try {
      const shoppingCentres = await ShoppingCentre.update({deletedAt: new Date()}, {where: {id: ctx.params.id}});
      const assets = await Asset.update({deletedAt: new Date()}, {where: {shoppingCentreId: ctx.params.id}});
      return {data: {shoppingCentres, assets}};
    } catch (error) {
      return {message: "cannot delete shopping centre", status: 500};
    }
  }
}

module.exports = softDeleteShoppingCentre;