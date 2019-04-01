const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const db = require('../../database/users-model');

function restricted(req, res, next) {
	const { username, password } = req.headers;

	if (username && password) {
		db
			.findBy({ username })
			.first()
			.then((user) => {
				if (user && bcrypt.compareSync(password, user.password)) {
					next();
				} else {
					res.status(401).json({ message: 'Invalid Credentials' });
				}
			})
			.catch((error) => {
				res.status(500).json({ message: 'unexpected error' });
			});
	} else {
		res.status(400).json({ error: 'plese provide username and password' });
	}
}
router.get('/api/users', restricted, (req, res) => {
	db
		.getAllUsers()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			res.status(500).json({ error: 'error trying to get the users for database' });
		});
});

module.exports = router;
