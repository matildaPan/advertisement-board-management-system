"use strict";

const jwt = require("jsonwebtoken");
const ApiGateway = require("moleculer-web");
const Errors = require("moleculer-web").Errors;


module.exports = {
	name: "gateway",
	mixins: [ApiGateway],
	settings: {
    port: process.env.PORT || 3000,
    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
      allowedHeaders: ["*"],
      exposedHeaders: ["*"],
      credentials: true,
      maxAge: 3600
    },
		routes: [{
			path: "/api",
			authorization: true,
			whitelist: [
				"*"
			],
			aliases: { 
				"POST login": "auth.login",
        "GET shoppingCentreList": "shoppingcentreasset.shoppingCentreList"
			},
			
		}]
	}, 
	methods: {
		authorize(ctx, route, req){
      const apiUrl = req.url;
      if(apiUrl === '/api/login'){
        return Promise.resolve(ctx);
      }else{
        let auth = req.headers["authorization"];
        if (auth && auth.startsWith("Bearer")) {
          let token = auth.slice(7);
          return jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
              return Promise.reject(new Errors.UnAuthorizedError(Errors.ERR_INVALID_TOKEN));
            }else{
              const {username, userId} = decoded;
              ctx.meta.reqTokenData = {username, userId};
              return Promise.resolve(ctx);
            }
          });
        } else {
          return Promise.reject(new Errors.UnAuthorizedError(Errors.ERR_NO_TOKEN));
        }
      }
		}
	}

	
};
