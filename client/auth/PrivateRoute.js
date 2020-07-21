/** @format */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import auth from './authHelper';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					auth.isAuthenticate() ? (
						<Component {...props} />
					) : (
						<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
					)
				}
			/>
		</div>
	);
};

export default PrivateRoute;
