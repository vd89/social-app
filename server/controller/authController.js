/** @format */
import { sign } from "jsonwebtoken";

import User from "../models/User";
import {jwtSecret} from '../../config/config'
import jwt from "express-jwt";

// user Auth login route
const signin = (req, res) => {
	try {
    const user = await User.findOne({ 'email': req.body.email })
    if (!user) {
      return res.status(401).json({error: 'User Not found '})
    }
    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({error: "Email and password don't match"})
    }
    const payload = { _id: user._id }
    const token = sign(payload, jwtSecret, { expiresIn: 9999 })
    res.cookie('t', token, { expire: new Date() + 9999 });
    return res.status(200).json({
      token, user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    })
	} catch (err) {
		return res.status(401).json({ error: 'Could not sign in' });
	}
};

// User Signout route
const signout = (req, res) => {
  res.clearCookie('t');
  return res.status(200).json({message: "Signed out successfully "})
};

// user is signed or not
const requiredSignin = jwt({
  secret: jwtSecret,
  userProperty: 'auth'
})

// User is authorized or not
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized'
    })
  }
  next()
};

export default { signin, signout, requiredSignin, hasAuthorization };
