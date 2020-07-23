/** @format */

import React, { useState, useEffect } from 'react';
import auth from '../auth/authHelper';
import { findPeople, follow } from './userApi';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Button,
	Snackbar,
	Paper,
	Typography,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: theme.mixins.gutters({
		padding: theme.spacing(1),
		margin: 0,
	}),
	title: {
		margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
		color: theme.palette.openTitle,
		fontSize: '1rem',
	},
	avatar: {
		marginRight: theme.spacing(1),
	},
	follow: {
		right: theme.spacing(2),
	},
	snack: {
		color: theme.palette.protectedTitle,
	},
	viewButton: {
		verticalAlign: 'middle',
	},
}));

export const FindPeople = () => {
	const classes = useStyles();
	const [values, setValues] = useState({
		users: [],
		open: false,
		followMessage: '',
	});
	const jwt = auth.isAuthenticate();
	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		findPeople({ userId: jwt.user._id }, { t: jwt.token }, signal).then((data) => {
			if (data && data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, users: data });
			}
		});
		return function cleanup() {
			abortController.abort();
		};
	}, []);

	const clickFollow = (user, index) => {
		follow(
			{
				userId: jwt.user._id,
			},
			{ t: jwt.token },
			user._id
		).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				const toFollow = values.users;
				toFollow.splice(index, 1);
				setValues({
					...values,
					users: toFollow,
					open: true,
					followMessage: `Following ${user.name} !`,
				});
			}
		});
	};
	const handleRequestClose = (event, reason) => {
		setValues({ ...values, open: false });
	};

	return (
		<div>
			<Paper className={classes.root} elevation={4}>
				<Typography type='title' className={classes.title}>
					Who to Follow
				</Typography>
				<List>
					{values.users.map((item, i) => {
						return (
							<span key={i}>
								<ListItem>
									<ListItemAvatar>
										<Avatar src={'/api/users/photo/' + item._id} />
									</ListItemAvatar>
									<ListItemText primary={item.name}>
										<ListItemSecondaryAction>
											<Link to={'/user/' + item._id}>
												<IconButton variant='contained' color='secondary'>
													<VisibilityIcon />
												</IconButton>
											</Link>
											<Button
												aria-label='Follow'
												variant='contained'
												color='primary'
												onClick={() => {
													clickFollow(item, i);
												}}>
												Follow
											</Button>
										</ListItemSecondaryAction>
									</ListItemText>
								</ListItem>
							</span>
						);
					})}
				</List>
			</Paper>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={values.open}
				onClose={handleRequestClose}
				autoHideDuration={6000}
				message={<span>{values.followMessage}</span>}
			/>
		</div>
	);
};
