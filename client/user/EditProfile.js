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
	Avatar,
} from '@material-ui/core';
import { Publish } from '@material-ui/icons';
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
	bigAvatar: {
		width: 60,
		height: 60,
		margin: 'auto',
	},
	input: {
		display: 'none',
	},
	fileName: {
		marginLeft: '10px',
	},
}));

export default function EditProfile({ match }) {
	const classes = useStyles();

	const [values, setValues] = useState({
		name: '',
		password: '',
		email: '',
		about: '',
		photo: '',
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
		const value = name === 'photo' ? event.target.files[0] : event.target.value;
		setValues({ ...values, [name]: event.target.value });
	};

	const clickSubmit = () => {
		const userData = new FormData();
		values.name && userData.append('name', values.name);
		values.email && userData.append('email', values.email);
		values.password && userData.append('password', values.password);
		values.about && userData.append('about', values.about);
		values.photo && userData.append('photo', values.photo);

		update(
			{
				userId: match.params.userId,
			},
			{
				t: jwt.token,
			},
			userData
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
	const photoUrl = values.id
		? `/api/users/photo/${values.id}?${new Date().getTime()}`
		: '/api/users/defaultphoto';

	return (
		<>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant='h5' className={classes.title}>
						Edit Profile
					</Typography>
					<Avatar src={photoUrl} className={classes.bigAvatar} /> <br />
					<input
						accept='image/*/'
						className={classes.input}
						id='icon-button-file'
						type='file'
						onChange={handleChange('photo')}
					/>
					<label htmlFor='icon-button-file'>
						<Button variant='contained' color='default' component='span'>
							Upload
							<Publish />
						</Button>
					</label>
					<span className={classes.filename}>{values.photo ? values.photo.name : ''}</span>
					<br />
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
					<TextField
						id='multiline-flexible'
						row='2'
						value={values.about}
						label='About'
						className={classes.textField}
						type='about'
						onChange={handleChange('about')}
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
