/** @format */

import { Router } from 'express';
import authCtrl from '../controller/authController';
import userCtrl from '../controller/userController';
import postCtrl from '../controller/postController';

const { requiredSignin } = authCtrl;
const { userByID } = userCtrl;
const { listNewsFeed, postByID, createPost } = postCtrl;

const router = Router();

// UserId and postID
router.param('userId', userByID);
router.param('postId', postByID);

// List news Feed
router.get('/api/posts/feed/:userId', requiredSignin, listNewsFeed);

// Create a post
router.post('/api/posts/new/:userId', requiredSignin, createPost);
export default router;
