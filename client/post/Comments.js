/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import auth from '../auth/authHelper';
import { CardHeader, Avatar, TextField, Icon } from '@material-ui/core';
import { comment, uncomment } from './postApi';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	cardHeader: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	smallAvatar: {
		width: 25,
		height: 25,
	},
	commentField: {
		width: '96%',
	},
	commentText: {
		backgroundColor: 'white',
		padding: theme.spacing(1),
		margin: `2px ${theme.spacing(2)}px 2px 2px`,
	},
	commentDate: {
		display: 'block',
		color: 'gray',
		fontSize: '0.8em',
	},
	commentDelete: {
		fontSize: '1.6em',
		verticalAlign: 'middle',
		coursor: 'pointer',
	},
}));
function Comments(props) {
	const classes = useStyle();
	const [text, setText] = useState('');
	const jwt = auth.isAuthenticate();

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const addComment = (event) => {
		if (event.keyCode == 13 && event.target.value) {
			event.preventDefault();
			comment({ userId: jwt.user._id }, { t: jwt.token }, props.postId, {
				text: text,
			}).then((data) => {
				if (data.error) {
					console.log('data.err :>> ', data.error);
				} else {
					setText('');
					props.updateComments(data.comments);
				}
			});
		}
	};

	const deleteComment = (comment) => (event) => {
		uncomment({ userId: jwt.user._id }, { t: jwt.token }, props.postId, comment).then((data) => {
			if (data.error) {
				console.log('data.error :>> ', data.error);
			} else {
				props.updateComments(data.comments);
			}
		});
	};

	const commentBody = (item) => {
		return (
			<p className={classes.commentText}>
				<Link to={'/user/' + item.postedBy._id}>{item.postedBy.name}</Link>
				<br />
				{item.text}
				<span className={classes.commentDate}>
					{new Date(item.created).toDateString()} |
					{auth.isAuthenticate().user._id === item.postedBy._id && (
						<Icon onClick={deleteComment(item)} className={classes.commentDelete}>
							Delete
						</Icon>
					)}
				</span>
			</p>
		);
	};

	return (
		<div>
			<CardHeader
				className={classes.cardHeader}
				avatar={
					<Avatar
						className={classes.smallAvatar}
						src={'/api/users/photo/' + auth.isAuthenticate().user._id}
					/>
				}
				title={
					<TextField
						onKeyDown={addComment}
						multiline
						value={text}
						onChange={handleChange}
						placeholder='Write Something...'
						className={classes.commentField}
						margin='normal'
					/>
				}
			/>
			{props.comments.map((item, i) => {
				return (
					<CardHeader
						key={i}
						className={classes.cardHeader}
						title={commentBody(item)}
						avatar={
							<Avatar
								className={classes.smallAvatar}
								src={'/api/users/photo' + item.postedBy._id}
							/>
						}
					/>
				);
			})}
		</div>
	);
}

Comments.propTypes = {
	postId: PropTypes.string.isRequired,
	comments: PropTypes.array.isRequired,
	updateComments: PropTypes.func.isRequired,
};

export default Comments;
