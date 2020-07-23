/** @format */

// register user
const create = async (user) => {
	try {
		const response = await fetch('/api/users/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

// View All user
const list = async (signal) => {
	try {
		let response = await fetch('/api/users', {
			method: 'GET',
			signal: signal,
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

// View single user
const read = async (params, credentials, signal) => {
	try {
		const response = await fetch('/api/users/' + params.userId, {
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

// Update single user account
const update = async (params, credentials, users) => {
	try {
		const response = await fetch('/api/users/' + params.userId, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: users,
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

// Delete the user
const remove = async (params, credentials) => {
	try {
		const response = await fetch('/api/users/' + params.userId, {
			method: 'DELETE',
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

// Follow user
const follow = async (params, credentials, followId) => {
	try {
		const response = await fetch('/api/users/follow/', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: JSON.stringify({ userId: params.userId, followId: followId }),
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

//Unfollow user
const unfollow = async (params, credentials, unfollowId) => {
	try {
		const response = await fetch('/api/users/unfollow', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + credentials.t,
			},
			body: JSON.stringify({ userId: params.userId, unfollowId: unfollowId }),
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

//Find People
const findPeople = async (params, credentials, signal) => {
	try {
		const response = await fetch('/api/users/findpeople/' + params.userId, {
			method: 'GET',
			signal: signal,
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

export { create, list, read, update, remove, follow, unfollow, findPeople };
