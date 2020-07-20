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
router.route('/:userId').get(userRead).put(userUpdate).delete(userRemove);

/*
  @ User get user id  to get params
  @ PARAM
*/
router.param('userId', userByID);
export default router;
