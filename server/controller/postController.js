/** @format */

import formiable from 'formidable';
import errHandler from '../helpers/dbErrorHandler';
import Post from '../models/Post';
import { readFileSync } from 'fs';

const { getErrorMessage } = errHandler;


const listNewsFeed = async (req, res) => {
	const following = req.profile.following;
	following.push(req.profile._id);
	try {
		const posts = await Post.find({ postedBy: { $in: req.profile.following } })
			.populate('comments.postedBy', '_id name')
			.populate('postedBy', '_id name')
			.sort('-created')
			.exec();
		return res.status(200).json(posts);
	} catch (err) {
		return res.status(400).json({ error: getErrorMessage(err) });
	}
};

const postByID = async (req, res, next, id) => {
	try {
		const post = await (await Post.findById(id).populate('postedBy', '_id name')).exec();
		if (!post) {
			return res.status(400).json({
				error: 'Post Not Found',
			});
		}
		req.post = post;
		next();
	} catch (err) {
		return res.status(400).json({ error: getErrorMessage(err) });
	}
};

const createPost = (req, res, next) => {
	const form = new formiable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(400).json({ error: 'Image could not be uploaded' });
		}
		const post = new Post(fields);
		post.postedBy = req.profile;
		if (files.photo) {
			post.photo.data = readFileSync(files.photo.path);
			post.photo.contentType = files.photo.type;
		}
		try {
			const result = await post.save();
			return res.status(200).json(result);
		} catch (err) {
			return res.status(400).json({
				error: getErrorMessage(err),
			});
		}
	});
};

const photo = (req, res, next) => {
	res.set('Content-Type', req.post.photo.contentType);
	return res.send(req.post.photo.data);
};

const listByUser = async (req, res) => {
	try {
		const posts = await Post.find({ postedBy: req.pofile._id })
			.populate('comments.postedBy', '_id name')
			.populate('postedBy', '_id name')
			.sort('-created')
			.exec();
		return res.status(200).json(posts);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

const like = async (req, res) => {
	try {
		let result = await Post.findByIdAndUpdate(
			req.body.postId,
			{ $push: { likes: req.body.userId } },
			{ new: true }
		);
		return res.status(200).json(result);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

const unlike = async (req, res) => {
	try {
		let result = await Post.findByIdAndUpdate(
			req.body.postId,
			{ $pull: { unlikes: req.body.userId } },
			{ new: true }
		);
		return res.status(200).json(result);
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		});
	}
};

const comment = async (req, res) => {
	const comment = req.body.comment;
	comment.postedBy = req.body.userId;
	try {
		let result = await Post.findByIdAndUpdate(
			req.body.postId,
			{ $push: { comments: comment } },
			{ new: true }
		)
			.populate('comments.postedBy', '_id name')
			.populate('postedBy', '_id name')
			.exec();
		return res.status(200).json(result);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

const uncomment = async (req, res) => {
	const comment = req.body.comment;
	comment.postedBy = req.body.userId;
	try {
		let result = await Post.findByIdAndUpdate(
			req.body.postId,
			{ $pull: { comments: comment } },
			{ new: true }
		)
			.populate('comments.postedBy', '_id name')
			.populate('postedBy', '_id name')
			.exec();
		return res.status(200).json(result);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

const isPoster = (req, res, next) => {
	let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
	if (!isPoster) {
		return res.status('403').json({
			error: 'User is not authorized',
		});
	}
	next();
};

const remove = async (req, res) => {
	let post = req.post;
	try {
		let deletedPost = await post.remove();
		return res.json(deletedPost);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

export default {
	listNewsFeed,
	postByID,
	createPost,
	photo,
	listByUser,
	like,
	unlike,
	comment,
	uncomment,
	isPoster,
	remove,
};
