const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require('../database/models').User;
const saltRounds = 10;

const login = async (ctx) => {
  const username = ctx.params.username;
  const password = ctx.params.password;
  const user = await User.findOne({where: {username}});
  const hashedPassword = user.password;
  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  if(!user){
    return { message: 'Authentication failed. User not found.' };
  }
  if(!comparedPassword){
    return { message: 'Authentication failed. Incorrect password.' };
  }else{
    const token = jwt.sign(ctx.params, process.env.JWT_SECRET, { expiresIn: '24h' })
    return {
      data: {
        success: true,
        token: token
      }
    };
  }
};

module.exports = login;