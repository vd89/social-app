/** @format */

import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './core/Home';
import Users from './user/Users';

const MainRoute = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/api/users' component={Users} />
			</Switch>
		</div>
	);
};

export default MainRoute;
