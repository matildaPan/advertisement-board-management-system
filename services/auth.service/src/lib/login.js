const jwt = require("jsonwebtoken");
const User = require('../database/models').User;

const login = async (ctx) => {
  const username = ctx.params.username;
  const user = await User.findOne({where: {username}});
  console.log({user});
  return user
};

module.exports = login;