/** @format */

import { Router } from 'express';
import authCtrl from '../controller/authController';
import userCtrl from '../controller/userController';
import postCtrl from '../controller/postController';

const { requiredSignin } = authCtrl;
const { userByID } = userCtrl;
const { listNewsFeed, postByID, createPost, photo, listByUser } = postCtrl;

const router = Router();

// UserId and postID
router.param('userId', userByID);
router.param('postId', postByID);

// List news Feed
router.get('/api/posts/feed/:userId', requiredSignin, listNewsFeed);

// Create a post
router.post('/api/posts/new/:userId', requiredSignin, createPost);

// Get Photo of the post
router.get('/api/posts/photo/:postId', photo);

// Get list by users
router.get('/api/posts/by/:userId', requiredSignin, listByUser);

export default router;
