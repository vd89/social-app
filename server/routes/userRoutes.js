/** @format */

import { Router } from 'express';
import {
	userList,
	userCreate,
	userRead,
	userUpdate,
	userRemove,
	userByID,
} from '../controller/userController';

import { requiredSignin, hasAuthorization } from '../controller/authController';
const router = Router();

/*
  @ User list and create user
  @ Router /api/users/
  @ POST && GET
*/
router.route('/').get(userList).post(userCreate);

/*
  @ User read, update and delete
  @ Route /api/users/:userId
  @ GET ,PUT and DELETE
*/
router
	.route('/:userId')
	.get(requiredSignin, userRead)
	.put(requiredSignin, hasAuthorization, userUpdate)
	.delete(requiredSignin, hasAuthorization, userRemove);

/*
  @ User get user id  to get params
  @ PARAM
*/
router.param('userId', userByID);
export default router;
