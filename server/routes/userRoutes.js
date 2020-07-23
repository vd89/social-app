/** @format */

import express from 'express';
import userCtrl from '../controller/userController';
import authCtrl from '../controller/authController';

const router = express.Router();
const {
	userList,
	userCreate,
	userRead,
	userUpdate,
	userRemove,
	userByID,
	photo,
	defaultPhoto,
	addFollowing,
	addFollower,
	removeFollowing,
	removeFollower,
	findPeople,
} = userCtrl;
const { requiredSignin, hasAuthorization } = authCtrl;

/*
  @ User list and create user
  @ Router /api/users/
  @ POST && GET
*/

router.route('/api/users').get(userList).post(userCreate);

/*
  @ User Profile photo
*/
router.route('/api/users/photo/:userId').get(photo, defaultPhoto);
router.route('/api/users/defaultPhoto').get(defaultPhoto);

/*
  @ Following and follower add and remove
  @ PUT Route
*/
router.route('/api/users/follow').put(requiredSignin, addFollowing, addFollower);
router.route('/api/users/unfollow').put(requiredSignin, removeFollowing, removeFollower);

/*
	@ find people route
	@ GET Route
*/
router.route('/api/users/findpeople/:userId').get(requiredSignin, findPeople);

/*
  @ User read, update and delete
  @ Route /api/users/:userId
  @ GET ,PUT and DELETE
*/
router
	.route('/api/users/:userId')
	.get(requiredSignin, userRead)
	.put(requiredSignin, hasAuthorization, userUpdate)
	.delete(requiredSignin, hasAuthorization, userRemove);

/*
  @ User get user id  to get params
  @ PARAM
*/
router.param('userId', userByID);

export default router;
