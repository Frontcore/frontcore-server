import express from 'express';
import passport from 'passport';
import AuthCtrl from '../../../controllers/authenticate.controller';
import msgUtils from '../../../utils/message.utils';

let router = express.Router();
let failureRes = {
  "success": false
};

/**
 * POST /auth/login - authenticate user's credentials
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/login', (req, res, next) => {
  let _reqPayload = req.body;

  if (!_reqPayload.username) {
    failureRes.message = msgUtils.required.username;
    return res.status(200).json(failureRes);
  }

  if (!_reqPayload.password) {
    failureRes.message = msgUtils.required.password;
    return res.status(200).json(failureRes);
  }

  return AuthCtrl.login(req, res, next);
});

/**
 * POST /auth/logout - destroy authenticate user's session
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/logout', (req, res, next) => {
  return AuthCtrl.logout(req, res, next);
});

/**
 * PUT /auth/change/pwd - change user's password
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.put('/change/pwd', (req, res, next) => {
  let _reqPayload = req.body;

  if (!_reqPayload.password) {
    failureRes.message = msgUtils.required.password;
    return res.status(200).json(failureRes);
  }

  return AuthCtrl.changePwd(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;
