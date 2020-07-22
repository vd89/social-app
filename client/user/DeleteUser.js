/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../auth/authHelper';
import {
	IconButton,
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	DialogContent,
	DialogContentText,
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { remove } from './userApi';
import { Redirect } from 'react-router';
function DeleteUser(props) {
	const [open, setOpen] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const jwt = auth.isAuthenticate();

	const clickButton = () => {
		setOpen(true);
	};
	const deleteAccount = () => {
		remove(
			{
				userId: props.userId,
			},
			{ t: jwt.token }
		).then((data) => {
			if (data && data.error) {
				console.log(data.error);
			} else {
				auth.clearJWT(() => {
					console.log('delete');
				});
				setRedirect(true);
			}
		});
	};
	const handleRequestClose = () => {
		setOpen(false);
	};
	if (redirect) {
		return <Redirect to='/' />;
	}
	return (
		<>
			<IconButton aria-label='Delete' onClick={clickButton} color='secondary'>
				<Delete />
			</IconButton>
			<Dialog open={open} onClose={handleRequestClose}>
				<DialogTitle>{'Delete Account'}</DialogTitle>
				<DialogContent>
					<DialogContentText>Confirm to Delete your account</DialogContentText>
					<DialogActions>
						<Button onClick={handleRequestClose} color='primary'>
							Cancle
						</Button>
						<Button onClick={deleteAccount} color='secondary' autoFocus='autoFocus'>
							Confirm
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</>
	);
}

DeleteUser.propTypes = {
	userId: PropTypes.string.isRequired,
};

export default DeleteUser;
