const ShoppingCentre = require('../database/models').ShoppingCentre;

const getShoppingCentreById = async (ctx) => {
  const data = await ShoppingCentre.findOne({where: {id: ctx.params.id, deletedAt: null}});
  if(!data){
    return {message: 'Shopping centre is not found', status: 404};
  }else{
    return {data};
  }
};

module.exports = getShoppingCentreById;