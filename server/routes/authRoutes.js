/** @format */

import { Router } from 'express';
import { signin, signout } from '../controller/authController';

const router = Router();

/*
  @ Signin route user
  @ Route /api/auth/signin
  @ POST
*/
router.route('/signin').post(signin);

/*
  @ Signout Route user
  @ Route /api/auth/signout
  @ GET
*/
router.route('/signout').get(signout);

export default router;
