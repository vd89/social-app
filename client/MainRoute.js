/** @format */

import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';

const MainRoute = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/users' component={Users} />
				<Route exact path='/signup' component={Signup} />
			</Switch>
		</div>
	);
};

export default MainRoute;
