/** @format */

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import {
	Paper,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Divider,
	ListItemSecondaryAction,
	IconButton,
} from '@material-ui/core';
import { Person, Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import auth from '../auth/authHelper';
import { read } from './userApi';
import { Link } from 'react-router-dom';
import DeleteUser from './DeleteUser';

const userStyle = makeStyles((theme) => ({
	root: theme.mixins.gutters({
		maxWidth: 600,
		margin: 'auto',
		padding: theme.spacing(3),
		marginTop: theme.spacing(5),
	}),
	title: {
		marginTop: theme.spacing(3),
		color: theme.palette.protectedTitle,
	},
}));

export default function Profile({ match }) {
	const classes = userStyle();
	const [user, setUser] = useState({});
	const [redirectToSignin, setRedirectToSignin] = useState(false);
	const jwt = auth.isAuthenticate();

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		read(
			{
				userId: match.params.userId,
			},
			{ t: jwt.token, signal }
		).then((data) => {
			if (data && data.error) {
				setRedirectToSignin(true);
			} else {
				setUser(data);
			}
		});
		return function cleanup() {
			abortController.abort();
		};
	}, [match.params.userId]);

	if (redirectToSignin) {
		return <Redirect to='/signin' />;
	}
	return (
		<>
			<Paper className={classes.root} elevation={4}>
				<Typography variant='h6' className={classes.title}>
					Profile
				</Typography>
				<List dense>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<Person />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={user.name} secondary={user.email} />{' '}
						{auth.isAuthenticate().user && auth.isAuthenticate().user._id == user._id && (
							<ListItemSecondaryAction>
								<Link to={'/user/edit/' + user._id}>
									<IconButton aria-label='Edit' color='primary'>
										<Edit />
									</IconButton>
								</Link>
								<DeleteUser userId={user._id} />
							</ListItemSecondaryAction>
						)}
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText primary={'Joined: ' + new Date(user.created).toDateString()} />
					</ListItem>
				</List>
			</Paper>
		</>
	);
}
