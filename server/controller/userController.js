/** @format */

import errHandler from '../helpers/dbErrorHandler';
import User from '../models/User';
import { extend } from 'lodash';

const { getErrorMessage } = errHandler;
// create new user
const userCreate = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		return res.status(200).json({
			message: 'Successfully signed up!',
		});
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

// view all user
const userList = async (req, res) => {
	try {
		let users = await User.find().select('-hashedPassword');
		return res.status(200).json(users);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

// get user By id
const userByID = async (req, res, next, id) => {
	try {
		let user = await User.findById(id);
		if (!user) {
			return res.status(400).json({
				error: 'User not found',
			});
		}
		req.profile = user;
		next();
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

// view single user
const userRead = (req, res) => {
	req.profile.hashedPassword = undefined;
	return res.json(req.profile);
};

// Update user
const userUpdate = async (req, res) => {
	try {
		let user = req.profile;
		user = extend(user, req.body);
		user.updated = Date.now();
		await user.save();
		user.hashedPassword = undefined;
		return res.status(200).json(user);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

// Delete user
const userRemove = async (req, res) => {
	try {
		const user = req.profile;
		const deletedUser = await user.remove();
		deletedUser.hashedPassword = undefined;
		return res.status(200).json(deletedUser);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

export default { userList, userByID, userCreate, userRead, userRemove, userUpdate };
