import express from 'express';
import passport from 'passport';
import UserCtrl from '../../../controllers/user.controller';

let router = express.Router();

/**
 * GET user/profile - get user's profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/profile', passport.authenticate('jwt'), (req, res, next) => {
  return UserCtrl.getProfile(req, res, next);
});

/**
 * POST user/create - create user's profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
router.post('/create', (req, res, next) => {
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
