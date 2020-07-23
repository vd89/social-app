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
import FollowProfileButton from './FollowProfileButton';
import FollowGrid from './FollowGrid';
import { props } from 'bluebird';

const userStyle = makeStyles((theme) => ({
	root: theme.mixins.gutters({
		maxWidth: 600,
		margin: 'auto',
		padding: theme.spacing(3),
		marginTop: theme.spacing(10),
	}),
	title: {
		margin: `${theme.spacing(2)}px ${theme.spacing(1)}px 0`,
		color: theme.palette.protectedTitle,
		fontSize: '1em',
	},
	bigAvatar: {
		width: 60,
		height: 60,
		margin: 10,
	},
}));

export default function Profile({ match }) {
	const classes = userStyle();
	const [values, setValues] = useState({
		user: { following: [], followers: [] },
		redirectToSignin: false,
		following: false,
	});
	const jwt = auth.isAuthenticate();

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		read(
			{
				userId: match.params.userId,
			},
			{ t: jwt.token },
			signal
		).then((data) => {
			// console.log('fetched data ', data);
			if (data && data.error) {
				setValues({ ...values, error: data.error, redirectToSignin: true });
			} else {
				let following = checkFollow(data);
				setValues({ ...values, user: data, following: following });
			}
		});
		return function cleanup() {
			abortController.abort();
		};
	}, [match.params.userId]);

	const checkFollow = (user) => {
		const match = user.followers.some((follower) => {
			return follower._id == jwt.user._id;
		});
		return match;
	};

	const clickFollowButton = (callApi) => {
		callApi(
			{
				userId: jwt.user._id,
			},
			{
				t: jwt.token,
			},
			values.user._id
		).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({ ...values, user: data, following: !values.following });
			}
		});
	};
	const { user, redirectToSignin } = values;
	// console.log('values  ==>', values, 'user  ==>', user);
	const photoUrl = values.user._id
		? `/api/users/photo/${values.user._id}? ${new Date().getTime()}`
		: '/api/users/defaultphoto';

	if (values.redirectToSignin) {
		return <Redirect to='/signin' />;
	}
	return (
		<div>
			<Paper className={classes.root} elevation={4}>
				<Typography variant='h6' className={classes.title}>
					Profile
				</Typography>
				<List dense>
					<ListItem>
						<ListItemAvatar>
							<Avatar src={photoUrl} className={classes.bigAvatar} />
						</ListItemAvatar>
						<ListItemText primary={values.user.name} secondary={values.user.email} />{' '}
						{auth.isAuthenticate().user && auth.isAuthenticate().user._id == values.user._id ? (
							<ListItemSecondaryAction>
								<Link to={'/user/edit/' + values.user._id}>
									<IconButton aria-label='Edit' color='primary'>
										<Edit />
									</IconButton>
								</Link>
								<DeleteUser userId={values.user._id} />
							</ListItemSecondaryAction>
						) : (
							<FollowProfileButton following={values.following} onButtonClick={clickFollowButton} />
						)}
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText
							primary={values.user.about}
							secondary={'Joined: ' + new Date(values.user.created).toDateString()}
						/>
					</ListItem>
				</List>
				<FollowGrid people={values.user.followers} />
				{/* <FollowGrid people={values.user.following} /> */}
			</Paper>
		</div>
	);
}
