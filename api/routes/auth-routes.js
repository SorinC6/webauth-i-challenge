const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const dbUser = require('../../database/users-model');

router.post('/api/register', (req, res) => {
	let user = req.body;

	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	dbUser
		.addUser(user)
		.then((saved) => {
			res.status(200).json(saved);
		})
		.catch((error) => {
			res.status(500).json({ error: 'error trying to register user' });
		});
});

router.post('/api/login', (req, res) => {
	let { username, password } = req.body;

	dbUser
		.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token: user.password
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});



module.exports = router;
