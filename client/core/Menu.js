/** @format */

import React from 'react';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import auth from '../auth/authHelper';

const isActive = (history, path) => {
	if (history.location.pathname == path) {
		return { color: '#ffa726' };
	} else {
		return { color: '#fffff' };
	}
};
const Menu = withRouter(({ history }) => (
	<AppBar>
		<Toolbar>
			<Typography>Social App</Typography>
			<Link to='/'>
				<IconButton aria-label='Home' style={isActive(history, '/')}>
					<Home />
				</IconButton>
			</Link>
			<Link to='/users' style={{ textDecoration: 'none' }}>
				<Button style={isActive(history, '/users')}>Users</Button>
			</Link>
			{!auth.isAuthenticate() && (
				<div>
					<Link to='/signup' style={{ textDecoration: 'none' }}>
						<Button style={isActive(history, '/signup')}>Sign Up</Button>
					</Link>
					<Link to='/signin' style={{ textDecoration: 'none' }}>
						<Button style={isActive(history, '/signin')}>Sign In</Button>
					</Link>
				</div>
			)}
			{auth.isAuthenticate() && (
				<div>
					<Link to={'/user/' + auth.isAuthenticate().user._id} style={{ textDecoration: 'none' }}>
						<Button style={isActive(history, '/user/' + auth.isAuthenticate().user._id)}>
							My Profile
						</Button>
					</Link>
					<Button
						color='inherit'
						onClick={() => {
							auth.clearJWT(() => history.push('/'));
						}}>
						Sign Out
					</Button>
				</div>
			)}
		</Toolbar>
	</AppBar>
));

export default Menu;
