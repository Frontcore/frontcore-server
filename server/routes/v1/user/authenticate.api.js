import express from 'express';
import passport from 'passport';
import AuthCtrl from '../../../controllers/authenticate.controller';

let router = express.Router();

/**
 * POST /auth/login - authenticate user's credentials
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/login', (req, res, next) => {
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
  return AuthCtrl.changePwd(req, res, next);
});

/**
 * @module router
 * @returns {Object} express router
 */
module.exports = router;
