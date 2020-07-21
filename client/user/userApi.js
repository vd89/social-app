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
		console.log(err);
	}
};

// View single user
const read = async (params, credentials, signal) => {
	try {
		const response = await fetch('/api/users/' + params.userId, {
			method: 'GET',
			signal: signal,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer' + credentials.t,
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
				'Content-Type': 'application/json',
				Authorization: 'Bearer' + credentials.t,
			},
			body: JSON.stringify(users),
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
				Authorization: 'Bearer' + credentials.t,
			},
		});
		return await response.json();
	} catch (err) {
		console.log('err :>> ', err);
	}
};

export { create, list, read, update, remove };
