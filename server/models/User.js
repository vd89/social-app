/** @format */

import { Schema, model } from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name is required',
	},
	email: {
		type: String,
		trim: true,
		unique: 'Email already Exists',
		required: 'Email is required',
	},
	about: {
		type: String,
		trim: true,
	},
	photo: {
		data: Buffer,
		contentType: String,
	},
	hashedPassword: {
		type: String,
		required: 'Password is required',
	},
	following: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	created: {
		type: Date,
		default: Date.now(),
	},
	updated: Date,
});
// To virtualy set password for user and then store to database
UserSchema.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.hashingPassword(password, this.salt);
	})
	.get(function () {
		return this._password;
	});

// Methods for password
UserSchema.methods = {
	authenticate: function (password) {
		return compareSync(password, this.hashedPassword);
	},
	makeSalt: function () {
		return genSaltSync(10);
	},
	hashingPassword: function (password, salt) {
		if (!password) {
			return '';
		}
		try {
			return hashSync(password, salt);
		} catch (err) {
			return '';
		}
	},
};

// Path and validation
UserSchema.path('hashedPassword').validate(function (v) {
	if (this._password && this._password.length < 6) {
		this.invalidate('password', 'Password must be at leat 6 characters.');
	}
	if (this.isNew && !this._password) {
		this.invalidate('password', 'Password is required');
	}
}, null);
export default model('User', UserSchema, 'users');
