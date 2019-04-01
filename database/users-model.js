const db = require('./dbConfig');

function getAllUsers() {
	return db('users');
}

// function getUserById(id) {
// 	return db('users').where({ id }).first();
// }

async function addUser(user) {
	const [ id ] = await db('users').insert(user);

	return findById(id);
}

function findById(id) {
	return db('users').where({ id }).first();
}

module.exports = {
	getAllUsers,
	addUser
};
