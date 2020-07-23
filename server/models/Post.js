/** @format */

const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
	text: {
		type: String,
		required: 'Text is required',
	},
	photo: {
		data: Buffer,
		contentType: String,
	},
	likes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	comments: [
		{
			type: String,
			created: {
				type: Date,
				default: Date.now,
			},
			postedBy: {
				type: {
					type: Schema.type.ObjectId,
					ref: 'User',
				},
			},
		},
	],
	postedBy: {
		type: Schema.type.ObjectId,
		ref: 'User',
	},
	created: {
		type: Date,
		default: Date.now,
	},
});

export default model('Post', PostSchema, 'posts');
