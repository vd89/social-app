/** @format */

import errHandler from '../helpers/dbErrorHandler';
import User from '../models/User';
import { extend } from 'lodash';
import { IncomingForm } from 'formidable';
import { readFileSync } from 'fs';
import profileImage from './../../client/assets/images/profile-pic.png';

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
	let form = new IncomingForm();
	form.keepExtensions = true;
	form.parse(req, async (err, fields, files) => {
		if (err) {
			return req.status(400).json({ error: 'Photo could not be uploaded' });
		}
		let user = req.profile;
		user = extend(user, fields);
		user.updated = Date.now();
		if (files.photo) {
			user.photo.data = readFileSync(files.photo.path);
			user.photo.contentType = files.photo.type;
		}
		try {
			await user.save();
			user.hashedPassword = undefined;
			return res.status(200).json(user);
		} catch (err) {
			return res.status(400).json({
				error: getErrorMessage(err),
			});
		}
	});
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

// Photo
const photo = (req, res, next) => {
	if (req.profile.photo.data) {
		res.set('Content-Type', req.profile.photo.contentType);
		return res.send(req.profile.photo.data);
	}
	next();
};
const defaultPhoto = (req, res) => {
	return res.status(200).sendFile(process.cwd() + profileImage);
};

export default {
	userList,
	userByID,
	userCreate,
	userRead,
	userRemove,
	userUpdate,
	photo,
	defaultPhoto,
};
