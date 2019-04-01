import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './components/Register';

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" />

				<Route path="/login" />
				<Route path="/register" component={Register} />
			</div>
		);
	}
}

export default App;
