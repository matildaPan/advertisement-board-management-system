const ShoppingCentre = require("../database/models").ShoppingCentre;

const softDeleteShoppingCentre = async (ctx) => {
  const data = await ShoppingCentre.findOne({where: {id: ctx.params.id}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    try {
      const result = await ShoppingCentre.update({deletedAt: new Date()}, {where: {id: ctx.params.id}});
      return {data: result}
    } catch (error) {
      return {message: "cannot delete shopping centre", status: 500};
    }
  }
}

module.exports = softDeleteShoppingCentre;