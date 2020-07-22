/** @format */

import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import Profile from './user/Profile';
import PrivateRoute from './auth/PrivateRoute';
import EditProfile from './user/EditProfile';

const MainRoute = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/users' component={Users} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/signin' component={Signin} />
				<PrivateRoute path='/user/edit/:userId' component={EditProfile} />
				<Route path='/user/:userId' component={Profile} />
			</Switch>
		</div>
	);
};

export default MainRoute;
