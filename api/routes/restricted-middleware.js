const bcrypt = require('bcryptjs');

const dbUsers = require('../../database/users-model');

const restricted = (req, res, next) => {
	if (req.session && req.session.user) {
		next();
	} else {
		res.status(400).json({ message: 'no credential provided' });
	}
};

module.exports = restricted;
