/** @format */

import { Router } from 'express';
import authCtrl from '../controller/authController';
import userCtrl from '../controller/userController';
import postCtrl from '../controller/postController';

const { requiredSignin } = authCtrl;
const { userByID } = userCtrl;
const { listNewsFeed } = postCtrl;

const router = Router();

// UserId from params
router.param('userId', userByID);

// List news Feed
router.get('/api/posts/feed/:userId', requiredSignin, listNewsFeed);

export default router;
