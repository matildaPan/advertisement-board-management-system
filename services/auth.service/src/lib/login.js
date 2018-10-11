const jwt = require("jsonwebtoken");
const User = require('../database/models').User;

const login = async (ctx) => {
  const username = ctx.params.username;
  const password = ctx.params.password;
  const user = await User.findOne({where: {username, password}});
  if(!user){
    return { message: 'Authentication failed. User not found.' };
  }else{
    const token = jwt.sign(ctx.params, process.env.JWT_SECRET, { expiresIn: '1h' })
    return {
      data: {
        success: true,
        token: token}
    };
  }


};

module.exports = login;