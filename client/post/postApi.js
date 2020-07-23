/** @format */

const listNewsFeed = async (params, credentials, signal) => {
	try {
		const response = await fetch('/api/posts/feed' + params.userId, {
			method: 'GET',
			signal: signal,
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
		});
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};

const create = async (params, credentials, post) => {
	try {
		const response = await fetch('/api/posts/new' + params.userId, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: post,
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

const listByUser = async (params, credentials) => {
	try {
		const response = await fetch('/api/posts/by/' + params.userId, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

const like = async (params, credentials, postId) => {
	try {
		const response = await fetch('/api/posts/like/', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: JSON.stringify({ userId: params.userId, postId: postId }),
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

const unlike = async (params, credentials, postId) => {
	try {
		const response = await fetch('/api/posts/unlike/', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: JSON.stringify({ userId: params.userId, postId: postId }),
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

export default { listNewsFeed, create, listByUser, like, unlike };
