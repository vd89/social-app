/** @format */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardHeader,
	Avatar,
	CardContent,
	TextField,
	IconButton,
	Typography,
	Icon,
	CardActions,
	makeStyles,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import auth from '../auth/authHelper';
import { create } from './postApi';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#efefef',
		padding: `${theme.spacing(3)}px 0px 1px`,
	},
	card: {
		maxWidth: 600,
		margin: 'auto',
		marginBottom: theme.spacing(3),
		backgroundColor: 'rgba(65, 150, 136, 0.09)',
		boxShadow: 'none',
	},
	cardContent: {
		backgroundColor: 'white',
		paddingTop: 0,
		paddingBottom: 0,
	},
	cardHeader: {
		paddingTop: 8,
		paddingBottom: 8,
	},
	photoButton: {
		height: 30,
		marginBottom: 5,
	},
	input: {
		display: 'none',
	},
	textField: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: '90%',
	},
	submit: {
		margin: theme.spacing(2),
	},
	filename: {
		verticalAlign: 'super',
	},
}));

function NewPosts(props) {
	const classes = useStyles();
	const [values, setValues] = useState({
		text: '',
		photo: '',
		error: '',
		user: {},
	});
	const jwt = auth.isAuthenticate();
	useEffect(() => {
		setValues({ ...values, user: auth.isAuthenticate().user });
	}, []);
	const clickPost = () => {
		let postData = new FormData();
		postData.append('text', values.text);
		postData.append('photo', values.photo);
		create({ userId: jwt.user._id }, { t: jwt.token }, postData).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({ ...values, text: '', photo: '' });
				props.addUpdate(data);
			}
		});
	};

	const handleChange = (name) => (event) => {
		const value = name === 'photo' ? event.target.files[0] : event.target.value;
		setValues({ ...values, [name]: value });
	};
	const photoUrl = value.user._id
		? '/api/users/photo/' + values.user._id
		: '/api/users/defaultphoto';

	return (
		<div className={clases.root}>
			<Card className={classes.card}>
				<CardHeader
					avatar={<Avatar src={photoUrl} />}
					title={values.user.name}
					className={classes.cardHeader}
				/>
				<CardContent className={classes.cardContent}>
					<TextField
						className={classes.textField}
						placeholder='Share your thoughts...'
						multiline
						row='3'
						value={values.text}
						onChange={handleChange('text')}
						margin='normal'
					/>
					<input
						className={classes.input}
						type='file'
						id='icon-button-file'
						accept='image/*'
						onChange={handleChange('photo')}
					/>
					<label htmlFor='icon-button-file'>
						<IconButton color='secondary' component='span' className={classes.photoButton}>
							<PhotoCamera />
						</IconButton>
					</label>
					<span className={classes.filename}>{values.photo ? values.photo.name : ''}</span>
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
						className={classes.submit}
						disabled={values.text === ''}
						onClick={clickPost}>
						POST
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

NewPosts.propTypes = {
	addUpdate: PropTypes.func.isRequired,
};

export default NewPosts;
