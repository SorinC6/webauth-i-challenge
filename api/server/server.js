const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

//routes import - nothing for now
const authRoutes = require('../routes/auth-routes');
const userRoutes = require('../routes/user-routes');

const server = express();

const sessionConfig = {
	name: 'monkey',
	secret: 'keep it a secret and long',
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false //in production true
	},
	httpOnly: true,
	resave: false, //don't crecreate the sesion
	saveUninitialized: false // don't save anything unsless its change
	//this is to get persistance
};

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

//server.use(routes)
server.use(authRoutes);
server.use(userRoutes);

module.exports = server;
