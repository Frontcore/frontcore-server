import express from 'express';
import passport from 'passport';
import UserCtrl from '../../../controllers/user.controller';
import msgUtils from '../../../utils/message.utils';

let router = express.Router();
let failureRes = {
  "success": false
};

/**
 * GET user/profile - get user's profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/profile', passport.authenticate('jwt'), (req, res, next) => {
  let _reqPayload = req.body;

  if (!_reqPayload.username) {
    failureRes.message = msgUtils.required.username;
    return res.status(200).json(failureRes);
  }

  return UserCtrl.getProfile(req, res, next);
});

/**
 * POST user/create - create user's profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/create', (req, res, next) => {
  let _reqPayload = req.body;

  if (!_reqPayload.firstName) {
    failureRes.message = msgUtils.required.firstname;
    return res.status(422).json(failureRes);
  }

  if (!_reqPayload.lastName) {
    failureRes.message = msgUtils.required.lastname;
    return res.status(422).json(failureRes);
  }

  if (!_reqPayload.email) {
    failureRes.message = msgUtils.required.email;
    return res.status(422).json(failureRes);
  }

  if (!_reqPayload.username) {
    failureRes.message = msgUtils.required.username;
    return res.status(422).json(failureRes);
  }

  if (!_reqPayload.password) {
    failureRes.message = msgUtils.required.password;
    return res.status(422).json(failureRes);
  } 

  return UserCtrl.setProfile(req, res, next);
});

/**
 * PUT user/profile - update user's profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.put('/profile', (req, res, next) => {
  return UserCtrl.updateProfile(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;
