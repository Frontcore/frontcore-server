import express from 'express';
import UserCtrl from '../../../controller/user.controller';

let router = express.Router();

/**
 * POST /login - get the project information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/login', (req, res, next) => {
  return UserCtrl.authenticate(req, res, next);
});

/**
 * PUT /change/pwd - get the project information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.put('/change/pwd', (req, res, next) => {
  return UserCtrl.changePwd(req, res, next);
});

/**
 * GET /profile - get the project information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.get('/profile', (req, res, next) => {
  return UserCtrl.getProfile(req, res, next);
});

/**
 * PUT /profile - get the project information
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
