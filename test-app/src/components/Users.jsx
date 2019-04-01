import React, { Component } from 'react';
import Axios from 'axios';

class Users extends Component {
	state = {
		users: []
	};

	componentDidMount() {
		Axios.get('http://localhost:4000/api/users')
			.then((users) => {
				console.log(users.data);
				this.setState({
					users: users.data
				});
			})
			.catch((err) => console.log(err));
	}

	onLogout = () => {
		localStorage.clear();
	};

	render() {
		return (
			<div>
				<h2>List of Users</h2>
				<button onClick={this.onLogout}>Logout</button>
                {
                    this.state.users.map(user=><p>{user.username}</p>)
                }
			</div>
		);
	}
}

export default Users;
