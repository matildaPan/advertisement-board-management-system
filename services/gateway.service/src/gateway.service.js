"use strict";

const jwt = require("jsonwebtoken");
const ApiGateway = require("moleculer-web");
const Errors = require("moleculer-web").Errors;


module.exports = {
	name: "gateway",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			authorization: false,
			whitelist: [
				"*"
			],
			aliases: { 
				"POST login": "auth.login",
			},
			
			cors: {
				origin: ["http://localhost:80"],
				methods: ["*"]
			},
			
		}]
	}, 
	methods: {
		authorize(ctx, route, req){
			let auth = req.headers["authorization"];
			if (auth && auth.startsWith("Bearer")) {
				let token = auth.slice(7);
				return jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
					if(err){
						return Promise.reject(new Errors.UnAuthorizedError(Errors.ERR_INVALID_TOKEN));
					}else{
						const {product, environment, account_id} = decoded;
						ctx.meta.reqTokenData = {productName: product, environmentName: environment, accountId: account_id	};
						return Promise.resolve(ctx);
					}
				});
			} else {
				return Promise.reject(new Errors.UnAuthorizedError(Errors.ERR_NO_TOKEN));
			}
		}
	}

	
};
