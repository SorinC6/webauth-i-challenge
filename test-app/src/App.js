import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';

class App extends Component {
	render() {
		const loggedIn = localStorage.getItem('token');
		return (
			<div>


				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/users" component={Users} />
			</div>
		);
	}
}

export default App;
