import React, { Component } from 'react';


class Register extends Component {
	state = {};

	render() {
		return (
			<div>
				<form onSubmit={this.onRegister}>
					<input placeholder="username" />
					<input />
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default Register;

//const Form = styled.form``;
