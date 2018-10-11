"use strict";
const { ServiceBroker } = require("moleculer");
let path = require("path");

const broker = new ServiceBroker({
	logger: true,
	logLevel: process.env.LOG_LEVEL,
	hotReload: true,
	serializer: process.env.SERIALIZER,
	transporter: process.env.TRANSPORTER_PROTOCOL+"://"+process.env.RABBIT_USER+":"+process.env.RABBIT_PASS+"@"+process.env.TRANSPORTER_HOST+":"+process.env.TRANSPORTER_PORT
});

broker.loadService(path.resolve(__dirname, "./auth.service.js"));

broker.start();