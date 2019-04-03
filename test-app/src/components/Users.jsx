import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
	state = {
		users: []
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/api/users')
			.then((users) => {
				console.log(users.data);
				this.setState({
					users: users.data
				});
			})
			.catch((err) => {
				console.log('rrr');
				console.log(err);
			});
	}

	onLogout = () => {
		axios
			.get('http://localhost:4000/api/logout')
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
		localStorage.clear();
	};

	render() {
		return (
			<div>
				<h2>List of Users</h2>
				<button onClick={this.onLogout}>Logout</button>
				{this.state.users.map((user) => <p key={user.id}>{user.username}</p>)}
			</div>
		);
	}
}

export default Users;
