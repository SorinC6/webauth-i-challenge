const express = require('express');

const router = express.Router();
const db = require('../../database/users-model');
const restricted = require('../routes/restricted-middleware');

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
