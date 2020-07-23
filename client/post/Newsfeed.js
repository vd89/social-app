/** @format */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import auth from '../auth/authHelper';
import { listNewsFeed } from './postApi';

export default function Newsfeed() {
	const [posts, setPosts] = useState([]);
	const jwt = auth.isAuthenticate();

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		listNewsFeed({ userId: jwt.user._id }, { t: jwt.token }, signal).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setPosts(data);
			}
		});
		return function cleanup() {
			abortController.abort();
		};
	}, []);

	const addPost = (post) => {
		const updatedPosts = [...posts];
		updatedPosts.unshift(post);
		setPosts(updatedPosts);
	};
	const removePost = (post) => {
		const updatedPosts = [...posts];
		const index = updatedPosts.indexOf(post);
		updatedPosts.splice(index, 1);
		setPosts(updatedPosts);
	};
	return <div>{/* Todo add the add and remove post components */}</div>;
}
