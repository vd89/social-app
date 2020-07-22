/** @format */

import React, { useEffect, useState } from 'react';
import {
	makeStyles,
	Card,
	CardContent,
	Typography,
	TextField,
	Icon,
	CardActions,
	Button,
} from '@material-ui/core';
import auth from '../auth/authHelper';
import { update, read } from './userApi';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 600,

		margin: 'auto',
		textAlign: 'center',
		marginTop: theme.spacing(10),
		paddingBottom: theme.spacing(2),
	},
	title: {
		margin: theme.spacing(2),
		color: theme.palette.prtectedTitle,
	},
	error: {
		verticalAlign: 'middle',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 300,
	},
	submit: {
		margin: 'auto',
		marginBottom: theme.spacing(2),
	},
}));

export default function EditProfile({ match }) {
	const classes = useStyles();

	const [values, setValues] = useState({
		name: '',
		password: '',
		email: '',
		open: false,
		error: '',
		redirectToProfile: false,
	});
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
				setValues({ ...values, error: data.error });
			} else {
				setValues({ ...values, name: data.name, email: data.email });
			}
		});
		return function cleanup() {
			abortController.abort();
		};
	}, [match.params.userId]);

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const clickSubmit = () => {
		const user = {
			name: values.name || undefined,
			email: values.email || undefined,
			password: values.password || undefined,
		};
		update(
			{
				userId: match.params.userId,
			},
			{
				t: jwt.token,
			},
			user
		).then((data) => {
			if (data && data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({ ...values, userId: data._id, redirectToProfile: true });
			}
		});
	};
	if (values.redirectToProfile) {
		return <Redirect to={'/user/' + values.userId} />;
	}
	return (
		<>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant='h5' className={classes.title}>
						Edit Profile
					</Typography>
					<TextField
						id='name'
						value={values.name}
						label='Name'
						className={classes.textField}
						type='string'
						onChange={handleChange('name')}
						margin='normal'
					/>
					<br />
					<TextField
						id='email'
						value={values.email}
						label='Email'
						className={classes.textField}
						type='email'
						onChange={handleChange('email')}
						margin='normal'
					/>
					<br />
					<TextField
						id='password'
						value={values.password}
						label='Password'
						className={classes.textField}
						type='password'
						onChange={handleChange('password')}
						margin='normal'
					/>
					<br />
					{values.error && (
						<Typography component='p' color='error'>
							<Icon color='error' className={classes.error}>
								error
							</Icon>
							{values.error}
						</Typography>
					)}
				</CardContent>
				<CardActions>
					<Button
						color='primary'
						variant='contained'
						onClick={clickSubmit}
						className={classes.submit}>
						Submit
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
