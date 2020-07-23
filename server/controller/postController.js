/** @format */

import { getErrorMessage } from '../helpers';
import Post from '../models/Post';

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
export default { listNewsFeed, postByID };
