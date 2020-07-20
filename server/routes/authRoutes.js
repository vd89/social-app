/** @format */

import express from 'express';
import authCtrl from '../controller/authController';

const router = express.Router();
const { signin, signout } = authCtrl;
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
