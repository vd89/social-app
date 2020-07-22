/** @format */

import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { follow, unfollow } from './userApi';

export default function FollowProfileButton(props) {
	const followClick = () => {
		props.onButtonClick(follow);
	};
	const unfollowClick = () => {
		props.onButtonClick(unfollow);
	};

	return (
		<div>
			{props.following ? (
				<Button variant='contained' color='secondary' onClick={unfollowClick}>
					Unfollow
				</Button>
			) : (
				<Button variant='contained' color='primary' onClick={followClick}>
					Follow
				</Button>
			)}
		</div>
	);
}

FollowProfileButton.proptType = {
	following: PropTypes.bool.isRequired,
	onButtonClick: PropTypes.func.isRequired,
};
