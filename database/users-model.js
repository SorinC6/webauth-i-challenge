const db = require('./dbConfig');

function getAllUsers() {
	return db('users');
}

function getUserById(id) {
	return db('users').where({ id }).first();
}

module.exports = {
	getAllUsers
};
