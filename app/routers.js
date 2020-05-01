import React, { Component } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/home';
import List from './pages/list';


class MyRouters extends Component {
	render() {
		return (
			<Router>
				<App>
					<Switch>
						<Route exact path='/' component={ Home } />
						<Route path='/list' component={ List } />
					</Switch>
				</App>
			</Router>
		)
	}
}

export default MyRouters;
