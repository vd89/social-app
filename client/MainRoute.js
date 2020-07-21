/** @format */

import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './core/Home';

const MainRoute = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
};

export default MainRoute;
